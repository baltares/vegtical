import { Component, Input, OnInit } from '@angular/core';
import { PlantDataModel } from '@core/models/plants-data.model';

@Component({
  selector: 'app-plant-item-row',
  templateUrl: './plant-item-row.component.html',
  styleUrls: ['./plant-item-row.component.scss']
})
export class PlantItemRowComponent implements OnInit {

  @Input() plant!:PlantDataModel;
  public needSunIcon = ["wb_cloudy", "brightness_medium", "brightness_high"];

  constructor() { }

  ngOnInit(): void { }

  public setIconColor(){
    let color:string;
    if(this.plant.needSun==0) color="#495e6c";
    else if(this.plant.needSun==1) color="#D9BCA3";
    else if(this.plant.needSun==2) color="#bf5841";
    return color;
  }

}
