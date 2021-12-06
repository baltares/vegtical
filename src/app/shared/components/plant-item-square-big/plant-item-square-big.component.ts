import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';
import { FunctionsService } from '@core/services/functions.service';

@Component({
  selector: 'app-plant-item-square-big',
  templateUrl: './plant-item-square-big.component.html',
  styleUrls: ['./plant-item-square-big.component.scss'],
})
export class PlantItemSquareBigComponent implements OnInit {
  @Input() plant!: PlantDataModel;
  @Input() showDelete: boolean;
  @Input() indexOfList: number;
  @Output() outputDelete = new EventEmitter<number>();
  public needSunIcon = ['wb_cloudy', 'brightness_medium', 'brightness_high'];

  constructor(public fc: FunctionsService) {}

  ngOnInit(): void {}

  /**
   * Function to set sun icon color 
   * @returns 
   */
  public setIconColor() {
    let color: string;
    if (this.plant.needSun == 0) color = '#D9BCA3';
    else if (this.plant.needSun == 1) color = '#EA937F';
    else if (this.plant.needSun == 2) color = '#bf5841';
    return color;
  }

  /**
   * Function to emit indexoflist to delete plant
   */
  public deletePlant() {
    this.outputDelete.emit(this.indexOfList);
  }
}
