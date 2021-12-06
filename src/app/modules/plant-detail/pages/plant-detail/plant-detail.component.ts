import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss'],
})
export class PlantDetailComponent implements OnInit {
  plant: PlantDataModel;
  pageTitle: string;

  constructor(
    private route: ActivatedRoute,
    private _firebasedbService: FirebasedbService
  ) {}

  ngOnInit(): void {
    //subscription to get list of plants
    //and then subscription to get the plant by pageTitle
    this.route.params.subscribe((params) => {
      this._firebasedbService
        .getPlants()
        .subscribe((params2: PlantDataModel[]) => {
          this.pageTitle = params['name'];
          this.plant = params2.find(
            (plant) => plant.nameCommon == params['name']
          );
        });
    });
    //Function to set styles
    this.navBarShadow();
  }

  /**
   * Function to remove main navbar shadow
   */
  navBarShadow() {
    document
      .getElementById('header-toolbar')
      .setAttribute('style', 'box-shadow:none');
  }

  //Accordion functions not implemented
  openAll() {}
  closeAll() {}
}
