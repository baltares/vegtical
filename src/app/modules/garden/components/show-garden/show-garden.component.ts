import { Component, Input, OnInit } from '@angular/core';
import { GardenData2Model } from '@core/models/garden-data2.model';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { SelectPlantComponent } from '../select-plant/select-plant.component';

@Component({
  selector: 'app-show-garden',
  templateUrl: './show-garden.component.html',
  styleUrls: ['./show-garden.component.scss']
})
export class ShowGardenComponent implements OnInit {

  @Input() garden: GardenData2Model;
  columns: number;
  plantsListOrigin: PlantDataModel[];

  constructor(private _firebasedbService: FirebasedbService, public dialog: MatDialog) { }

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

  selectPlant(indexOfList:number) {
    const dialogRef = this.dialog.open(SelectPlantComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.garden.plantList[indexOfList]= result;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }



}
