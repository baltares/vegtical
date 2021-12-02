import { Injectable } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';

@Injectable({
  providedIn: 'root',
})
export class FunctionsService {
  constructor() {}

  stringToDate(date: string): Date {
    //strings with following pattern: "21-12"
    let year = new Date().getFullYear();
    let month = parseInt(date.substring(3, 5)) - 1;
    let day = parseInt(date.substring(0, 2));
    let standarDate = new Date(year, month, day);
    return standarDate;
  }
  dateToDayOfYear(date: Date): number {
    return Math.floor((date.getTime() - new Date(new Date().getFullYear(), 0, 1).getTime()) /1000/60/60/24);
  }
  dayOfYearPercent(date: number): string {
    return Math.ceil((date * 100) / 365) + '%';
  }

  checkBorder(plant: PlantDataModel): string {
    let addBorderClass: string = '';
    let classSeed: boolean = false;
    let classHarvest: boolean = false;
    plant.graphicIntervalList.forEach((element) => {
      let today = new Date(Date.now());
      if (today > this.stringToDate(element.start) && today < this.stringToDate(element.finish)) {
        if (element.type === 'seed') classSeed = true;
        if (element.type === 'harvest') classHarvest = true;
      }
    });
    addBorderClass = (classSeed ? 'seed' : '') + (classHarvest ? 'harvest' : '');
    return addBorderClass;
  }
  checkAvailable(period: string, plant: PlantDataModel): boolean {
    let available: boolean = false;
    plant.graphicIntervalList.forEach((element) => {
      if ((element.type = period)) {
        let today = new Date(Date.now());
        if (today > this.stringToDate(element.start) && today < this.stringToDate(element.finish)) {
          available = true;
        }
      }
    });
    return available;
  }
}
