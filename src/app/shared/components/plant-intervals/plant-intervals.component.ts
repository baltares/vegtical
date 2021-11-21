import { Component, Input, OnInit } from '@angular/core';
import { GraphicIntervalList } from '@core/models/plant-data.model';
import { FunctionsService } from '@core/services/functions.service';

@Component({
  selector: 'app-plant-intervals',
  templateUrl: './plant-intervals.component.html',
  styleUrls: ['./plant-intervals.component.scss'],
})
export class PlantIntervalsComponent implements OnInit {
  @Input() intervalsList: GraphicIntervalList[];
  @Input() plantName: string;
  @Input() individual: boolean;
  startDayOfYear: number;
  finishDayOfYear: number;
  startPercent: string;
  widthPercent: string;

  constructor(private fc: FunctionsService) {}

  ngOnInit(): void {
    this.generateIntervals();
  }

  generateIntervals(): void {
    this.intervalsList.forEach((element) => {
      let interval = document.createElement('div');
      let barSeed, barHarvest;
      if (element.type === 'seed') {
        if(this.individual){
          barSeed = document.getElementsByClassName('bar-seed')[0];
        } else {
          barSeed = document.getElementById(this.plantName).getElementsByClassName('bar-seed')[0];
        }
        barSeed.appendChild(interval);
        // interval.className = "div-seed";
        // interval.setAttribute("class","div-seed");
        this.calculateDimensions(element);
        interval.setAttribute(
          'style',
          `position: absolute; display: block; left:${this.startPercent}; bottom:0; height: 8px; border-radius: 4px; width:${this.widthPercent}; background-color: #EA937F;`
        );
      } else {
        if(this.individual){
          barHarvest = document.getElementsByClassName('bar-harvest')[0];
        } else {
          barHarvest = document.getElementById(this.plantName).getElementsByClassName('bar-harvest')[0];
        }
        barHarvest.appendChild(interval);
        this.calculateDimensions(element);
        interval.setAttribute(
          'style',
          `position: absolute; display: block; left:${this.startPercent}; bottom:0; height: 8px; border-radius: 4px; width:${this.widthPercent}; background-color: rgb(191, 88, 65);`
        );
      }
    });
  }
  calculateDimensions(element: GraphicIntervalList): void {
    this.startDayOfYear = this.fc.dateToDayOfYear(
      this.fc.stringToDate(element.start)
    );
    this.startPercent = this.fc.dayOfYearPercent(this.startDayOfYear);
    this.finishDayOfYear = this.fc.dateToDayOfYear(
      this.fc.stringToDate(element.finish)
    );
    this.widthPercent = this.fc.dayOfYearPercent(
      this.finishDayOfYear - this.startDayOfYear
    );
  }
}
