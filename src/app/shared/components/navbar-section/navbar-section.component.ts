import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FirebasedbService } from '@core/services/firebasedb.service';
import { PlantDataModel } from '@core/models/plant-data.model';

@Component({
  selector: 'app-navbar-section',
  templateUrl: './navbar-section.component.html',
  styleUrls: ['./navbar-section.component.scss'],
})
export class NavbarSectionComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() section: string;
  plantsList: PlantDataModel[];
  index: number;

  constructor(
    private _location: Location,
    private _router: Router,
    private _firebasedbService: FirebasedbService
  ) {}

  ngOnInit(): void {
    //subscription to list of plants 
    //and then get the index of the actual plant
    this._firebasedbService
      .getPlants()
      .subscribe((params: PlantDataModel[]) => {
        this.plantsList = params;
        this.index = this.plantsList
          .map((plant) => plant.nameCommon)
          .indexOf(this.pageTitle);
      });
  }
  /**
   * Function to go to previous page
   */
  onBack() {
    this._location.back();
  }
  /**
   * Function to navigate to previous item
   */
  previousItem() {
    if (this.index > 0) {
      this._router.navigate([
        '/plant-detail',
        this.plantsList[this.index - 1].nameCommon,
      ]);
      this.index = this.index - 1;
    }
  }
  /**
   * Function to navigate to next item
   */
  nextItem() {
    if (this.index < this.plantsList.length) {
      this._router.navigate([
        '/plant-detail',
        this.plantsList[this.index + 1].nameCommon,
      ]);
      this.index = this.index + 1;
    }
  }
}
