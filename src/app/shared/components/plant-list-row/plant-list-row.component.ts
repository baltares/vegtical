import { Component, OnInit } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';

@Component({
  selector: 'app-plant-list-row',
  templateUrl: './plant-list-row.component.html',
  styleUrls: ['./plant-list-row.component.scss'],
})
export class PlantListRowComponent implements OnInit {
  plantsList: PlantDataModel[];

  constructor(private _firebasedbService: FirebasedbService) {}

  ngOnInit(): void {
    //subscription to get list of plants
    this._firebasedbService
      .getPlants()
      .subscribe((params: PlantDataModel[]) => {
        this.plantsList = params;
      });
  }
}
