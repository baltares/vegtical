import { Component, OnInit } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FirebasedbService } from '@core/services/firebasedb.service';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-plant-list-grid-dd',
  templateUrl: './plant-list-grid-dd.component.html',
  styleUrls: ['./plant-list-grid-dd.component.scss'],
})
export class PlantListGridDdComponent implements OnInit {
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
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
