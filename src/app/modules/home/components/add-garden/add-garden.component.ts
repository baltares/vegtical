import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '@core/services/firebase.service';
import { Router } from '@angular/router';
import { GardenDataModel } from '@core/models/garden-data.model';
import { GardenData } from '@core/classes/garden-data';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-garden',
  templateUrl: './add-garden.component.html',
  styleUrls: ['./add-garden.component.scss'],
})
export class AddGardenComponent implements OnInit {
  userName: string;
  isUserNew: boolean;
  garden: GardenDataModel;
  inputGardenName: string;
  inputChoosen: string;
  inputGardenHeight: number;
  inputGardenWidth: number;
  inputGardenSelect: number;

  constructor(
    public dialogRef: MatDialogRef<AddGardenComponent>,
    private firebase: FirebaseService,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    if (this.auth.user$)
      this.auth.user$.subscribe((profile) => {
        if (profile != null) this.userName = profile.sub;
      });
  }

  cancelNewGarden(): void {
    this.dialogRef.close();
  }
  saveNewGarden(): void {
    if (!this.userName) {
      alert('No puedes crear un huerto sin estar registrado');
    } else {
      // this.isUserNew = this.firebase.getUserListObject().query.on()
      if (this.isUserNew) {
        this.firebase.createUser(this.userName);
      }
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
}
