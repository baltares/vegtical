import { Component, Input, OnInit } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';

@Component({
  selector: 'app-calendar-year-item',
  templateUrl: './calendar-year-item.component.html',
  styleUrls: ['./calendar-year-item.component.scss']
})
export class CalendarYearItemComponent implements OnInit {
  @Input() plant:PlantDataModel;

  constructor() { }

  ngOnInit(): void {
  }

}
