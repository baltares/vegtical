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
  styleUrls: ['./add-garden.component.scss']
})

export class AddGardenComponent implements OnInit {
  // profileJson: string = null;
  userName: string;
  garden: GardenDataModel;
  inputGardenName: string;
  inputChoosen: string;
  inputGardenHeight: number;
  inputGardenWidth: number;
  inputGardenSelect: number;


  constructor(public dialogRef: MatDialogRef<AddGardenComponent>,
    private firebase: FirebaseService,
    private router: Router,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      // this.profileJson = JSON.stringify(profile, null, 2);
      this.userName = profile.sub;
    });
  }

  cancelNewGarden(): void {
    this.dialogRef.close();
  }
  saveNewGarden(): void {
    
    if(this.inputChoosen=="create"){
      this.garden = new GardenData(this.userName,this.inputGardenName,this.inputGardenHeight,this.inputGardenWidth)
      this.firebase.createGarden(this.garden).then(()=>{
        console.log("Huerto creado y guardado");
      });
    }
    if(this.inputChoosen=="select"){
      //datos cargados del huerto modelo
    }
    this.router.navigate(['/garden',this.inputGardenName]);
  }

}
