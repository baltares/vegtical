import { Component, OnInit } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';
import { FunctionsService } from '@core/services/functions.service';

@Component({
  selector: 'app-available-plants',
  templateUrl: './available-plants.component.html',
  styleUrls: ['./available-plants.component.scss'],
})
export class AvailablePlantsComponent implements OnInit {
  plantsList: PlantDataModel[];

  constructor(
    private _firebasedbService: FirebasedbService,
    public fc: FunctionsService
  ) {}

  ngOnInit(): void {
    //subscribe to list of plants
    this._firebasedbService
      .getPlants()
      .subscribe((params: PlantDataModel[]) => {
        this.plantsList = params;
      });
  }
}
