import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GardenData } from '@core/classes/garden-data';
import { FirebaseService } from '@core/services/firebase.service';

@Component({
  selector: 'app-add-garden',
  templateUrl: './add-garden.component.html',
  styleUrls: ['./add-garden.component.scss']
})
export class AddGardenComponent implements OnInit {
  garden: GardenData = new GardenData();
  dataSaved = false;

  constructor(public dialogRef: MatDialogRef<AddGardenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private firebase: FirebaseService) { }

  ngOnInit(): void {
    
  }

  cancelNewGarden(): void {
    this.dialogRef.close();
  }
  saveNewGarden(): void {
    alert('guardar huerto');
  }

  saveGarden(): void {
    this.firebase.createUserGarden(this.garden).then(()=>{
      console.log("Huerto creado y guardado");
      this.dataSaved = true;
    });
  }

  newGarden(): void {
    this.dataSaved = false;
    this.garden = new GardenData();
  }

}
