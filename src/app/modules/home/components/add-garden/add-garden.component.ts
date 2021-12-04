import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '@core/services/firebase.service';
import { Router } from '@angular/router';
import { GardenDataModel } from '@core/models/garden-data.model';
import { GardenData } from '@core/classes/garden-data';
import { GardenData2Model } from '@core/models/garden-data2.model';
import { GardenData2 } from '@core/classes/garden-data2';
import { AuthService } from '@auth0/auth0-angular';
import { FirestoreService } from '@core/services/firestore.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-garden',
  templateUrl: './add-garden.component.html',
  styleUrls: ['./add-garden.component.scss'],
})
export class AddGardenComponent implements OnInit {
  userName: string;
  garden: GardenDataModel;
  garden2: GardenData2Model;
  defaultGarden: GardenData2Model;
  defaultGardens: GardenData2Model[];

  inputGardenName: string;
  inputChoosen: string;
  inputGardenHeight: number;
  inputGardenWidth: number;
  inputGardenSelect: string;
  numberError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddGardenComponent>,
    private firebase: FirebaseService,
    private firestore: FirestoreService,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    if (this.auth.user$)
      this.auth.user$.subscribe((profile) => {
        if (profile != null) this.userName = profile.sub;
        this.loadDefaultGardens();
      });
  }

  cancelNewGarden(): void {
    this.dialogRef.close();
  }
  saveNewGarden(): void {
    if (!this.userName) {
      alert('No puedes crear un huerto sin estar registrado');
    } else {
      if (this.inputChoosen == 'create') {
        this.garden = new GardenData(
          this.userName,
          this.inputGardenName,
          this.inputGardenHeight,
          this.inputGardenWidth
        );
        this.firebase.createGarden(this.garden).then(() => {
          console.log('Huerto creado y guardado en base de datos');
        });
      }
      if (this.inputChoosen == 'select') {
        //datos cargados del huerto modelo
      }
      this.router.navigate(['/garden', this.inputGardenName]);
    }
  }
  saveNewGarden2(): void {
    if (!this.userName) {
      alert('No puedes crear un huerto sin estar registrado');
    } else {
      if (this.inputChoosen == 'create') {
        this.garden2 = new GardenData2(
          this.inputGardenName,
          Math.round(this.inputGardenHeight*100)/100 ,
          Math.round(this.inputGardenWidth*100)/100
        );
      }
      else if (this.inputChoosen == 'select') {
        this.defaultGarden = this.defaultGardens.find(garden => garden.name === this.inputGardenSelect);
        this.garden2 = new GardenData2(
          this.inputGardenName,
          this.defaultGarden.height,
          this.defaultGarden.width,
          this.defaultGarden.plantList
        )
      }
      this.firestore.getAllUserGardens(this.userName);
      this.firestore.createGarden(this.inputGardenName,JSON.parse(JSON.stringify(this.garden2))).then(() => {
        console.log('Huerto creado y guardado en base de datos');
      });
      this.router.navigate(['/garden', this.inputGardenName]);
    }
  }

  loadDefaultGardens():void {
    this.firestore.getAllDefaultGardens().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.defaultGardens = data;
    });
  }

  checkNumber(inputNumber:number):void {
    this.numberError = (inputNumber<0.2 || inputNumber>2 )? true:false;
  }
}
