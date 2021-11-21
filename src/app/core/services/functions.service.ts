import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  stringToDate(date:string):Date{
    //strings with following pattern: "21-12"
    let year = new Date().getFullYear();
    let month = parseInt(date.substring(3,5))-1 ;
    let day = parseInt(date.substring(0,2));
    let standarDate = new Date(year, month, day);
    return standarDate;
  }
  dateToDayOfYear(date:Date):number{
    return Math.floor((date.getTime() - new Date(new Date().getFullYear(), 0, 1).getTime()) / 1000 / 60 / 60 / 24);
  }
  dayOfYearPercent(date:number):string{
    return Math.ceil(date * 100 / 365)+'%';
  }
}
