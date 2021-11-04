import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from '@core/services/firebasedb.service';
import { FormControl } from '@angular/forms';
import { PlantsDataModel } from '@core/models/plants-data.model';

@Component({
  selector: 'app-tool-search',
  templateUrl: './tool-search.component.html',
  styleUrls: ['./tool-search.component.scss'],
})
export class ToolSearchComponent implements OnInit {
  plantsList: PlantsDataModel[];
  myControl = new FormControl();

  constructor(private _firebasedbService: FirebasedbService) {}

  ngOnInit(): void {
    this._firebasedbService.getPlants()
      .subscribe((params: PlantsDataModel[]) => {
        this.plantsList = params;
      });
  }
}
