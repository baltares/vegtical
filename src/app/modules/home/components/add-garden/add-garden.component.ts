import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GardenData } from '@core/classes/garden-data';
import { FirebaseService } from '@core/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-garden',
  templateUrl: './add-garden.component.html',
  styleUrls: ['./add-garden.component.scss']
})

export class AddGardenComponent implements OnInit {
  garden: GardenData;
  dataSaved = false;
  inputGardenName: string;
  inputChoosen: string;
  inputGardenHeight: number;
  inputGardenWidth: number;
  inputGardenSelect: number;


  constructor(public dialogRef: MatDialogRef<AddGardenComponent>,
    private firebase: FirebaseService,
    private router: Router) { }

  ngOnInit(): void {}

  cancelNewGarden(): void {
    this.dialogRef.close();
  }
  saveNewGarden(): void {
    if(this.inputChoosen=="create"){
      this.firebase.createTempGarden(this.inputGardenName,this.inputGardenHeight,this.inputGardenWidth);
    }
    if(this.inputChoosen=="select"){
      //datos cargados del huerto modelo
    }
    this.router.navigate(['/garden',this.inputGardenName]);
  }

  saveGarden(): void {
    this.firebase.createGarden(this.garden).then(()=>{
      console.log("Huerto creado y guardado");
      this.dataSaved = true;
    });

  }

  newGarden(): void {
    this.dataSaved = false;
    // this.garden = new GardenData();
  }

}
