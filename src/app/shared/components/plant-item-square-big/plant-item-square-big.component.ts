import { Component, OnInit, Input } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';

@Component({
  selector: 'app-plant-item-square-big',
  templateUrl: './plant-item-square-big.component.html',
  styleUrls: ['./plant-item-square-big.component.scss']
})
export class PlantItemSquareBigComponent implements OnInit {

  @Input() plant!:PlantDataModel;
  public needSunIcon = ["wb_cloudy", "brightness_medium", "brightness_high"];
  public showDelete:boolean = true;

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
