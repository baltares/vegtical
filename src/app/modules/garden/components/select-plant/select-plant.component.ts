import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';

@Component({
  selector: 'app-select-plant',
  templateUrl: './select-plant.component.html',
  styleUrls: ['./select-plant.component.scss']
})
export class SelectPlantComponent implements OnInit {
  plantsList: PlantDataModel[];
  inputPlant: string;

  constructor(private _firebasedbService: FirebasedbService, public dialogRef: MatDialogRef<SelectPlantComponent>) { }

  ngOnInit(): void {
    this._firebasedbService.getPlants()
      .subscribe((params: PlantDataModel[]) => {
        this.plantsList = params;
      });
  }
  cancelPlant(): void {
    this.dialogRef.close();
  }
  savePlant(): void {
    const index = this.plantsList.map(plant => plant.nameCommon).indexOf(this.inputPlant);
    this.dialogRef.close(index);
  }


}
