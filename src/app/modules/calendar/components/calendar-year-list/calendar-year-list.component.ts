import { Component, OnInit } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';

@Component({
  selector: 'app-calendar-year-list',
  templateUrl: './calendar-year-list.component.html',
  styleUrls: ['./calendar-year-list.component.scss'],
})
export class CalendarYearListComponent implements OnInit {
  plantsList: PlantDataModel[];

  constructor(private _firebasedbService: FirebasedbService) {}

  ngOnInit(): void {
    //subscription to get plants from firebasedbService
    this._firebasedbService
      .getPlants()
      .subscribe((params: PlantDataModel[]) => {
        this.plantsList = params;
      });
  }
}
