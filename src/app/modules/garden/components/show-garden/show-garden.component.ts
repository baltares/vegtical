import { Component, Input, OnInit } from '@angular/core';
import { GardenData2Model } from '@core/models/garden-data2.model';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';

@Component({
  selector: 'app-show-garden',
  templateUrl: './show-garden.component.html',
  styleUrls: ['./show-garden.component.scss']
})
export class ShowGardenComponent implements OnInit {

  @Input() garden: GardenData2Model;
  columns: number;
  plantsListOrigin: PlantDataModel[];

  constructor(private _firebasedbService: FirebasedbService) { }

  ngOnInit(): void {
    this._firebasedbService.getPlants()
      .subscribe((params: PlantDataModel[]) => {
        this.plantsListOrigin = params;
      });
      this.columns = this.calculateColumns();
  }
  calculateColumns(){
    return Math.floor(this.garden.width / 0.15);
  }

  deletePlant(indexOfList:number) {

    this.garden.plantList[indexOfList]=null;

  }

}
