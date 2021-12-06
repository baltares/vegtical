import { Component, Input, OnInit } from '@angular/core';
import { GardenData2Model } from '@core/models/garden-data2.model';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { SelectPlantComponent } from '../select-plant/select-plant.component';

@Component({
  selector: 'app-show-garden',
  templateUrl: './show-garden.component.html',
  styleUrls: ['./show-garden.component.scss'],
})
export class ShowGardenComponent implements OnInit {
  @Input() garden: GardenData2Model;
  plantsListOrigin: PlantDataModel[];

  constructor(
    private _firebasedbService: FirebasedbService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //subscription to get list of plants
    this._firebasedbService
      .getPlants()
      .subscribe((params: PlantDataModel[]) => {
        this.plantsListOrigin = params;
      });
  }
  /**
   * Function to calculate the grid columns
   * @returns 
   */
  calculateColumns() {
    return Math.floor(this.garden.width / 0.15);
  }
  /**
   * Function to delete a plant
   * @param indexOfList 
   */
  deletePlant(indexOfList: number) {
    this.garden.plantList[indexOfList] = null;
  }
  /**
   * Function to open the select plant component
   * when closed it gets the index of the plant
   * and asigns it to the plantList[indexOfList]
   * @param indexOfList 
   */
  selectPlant(indexOfList: number) {
    const dialogRef = this.dialog.open(SelectPlantComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.garden.plantList[indexOfList] = result;
    });
  }
  /**
   * Function to drag and drop. Not working
   * @param event 
   */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
