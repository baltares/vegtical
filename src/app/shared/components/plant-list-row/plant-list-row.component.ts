import { Component, OnInit } from '@angular/core';
import { PlantsDataModel } from '@core/models/plants-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';

@Component({
  selector: 'app-plant-list-row',
  templateUrl: './plant-list-row.component.html',
  styleUrls: ['./plant-list-row.component.scss'],
})
export class PlantListRowComponent implements OnInit {
  plantsList: PlantsDataModel[];

  constructor(private _firebasedbService: FirebasedbService) {}

  ngOnInit(): void {
    this._firebasedbService.getPlants()
      .subscribe((params: PlantsDataModel[]) => {
        this.plantsList = params;
      });
  }
}
