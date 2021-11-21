import { Component, Input, OnInit } from '@angular/core';
import { GraphicIntervalList } from '@core/models/plant-data.model';

@Component({
  selector: 'app-plant-intervals',
  templateUrl: './plant-intervals.component.html',
  styleUrls: ['./plant-intervals.component.scss']
})
export class PlantIntervalsComponent implements OnInit {

  @Input() intervalsList: GraphicIntervalList[];
  @Input() plantName: string;
  

  constructor() { }

  ngOnInit(): void {
    this.generateIntervals();
  }

  generateIntervals(): void {
    this.intervalsList.forEach(element => {
      var interval = document.createElement("div");
      if(element.type==="seed") {
        console.log("elemento seed")
        var barSeed = document.getElementById(this.plantName).getElementsByClassName("bar-seed")[0];
        barSeed.appendChild(interval);
        // interval.className = "div-seed";
        interval.setAttribute("class","div-seed");
        // interval.setAttribute("style","position: relative; display: block; left:10px; height: 8px; border-radius: 4px; width:50px; background-color: rgb(217, 188, 163);");
      } else {
        console.log("elemento harvest")
        var barHarvest = document.getElementById(this.plantName).getElementsByClassName("bar-harvest")[0];
        barHarvest.appendChild(interval);
        interval.setAttribute("style","position: relative; display: block; left:10px; height: 8px; border-radius: 4px; width:50px; background-color: rgb(191, 88, 65);");
      }
    });
  }
}
