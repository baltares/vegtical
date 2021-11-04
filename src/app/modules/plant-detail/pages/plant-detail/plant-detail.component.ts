import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantsDataModel } from '@core/models/plants-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss'],
})
export class PlantDetailComponent implements OnInit {
  plant: PlantsDataModel;

  constructor(
    private route: ActivatedRoute,
    private _firebasedbService: FirebasedbService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this._firebasedbService.getPlants().subscribe((params2: PlantsDataModel[]) => {
        this.plant = params2.find(
          (plant) => plant.nameCommon == params['name']
        );
      });
    });
  }
}
