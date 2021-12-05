import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarYearListComponent } from './components/calendar-year-list/calendar-year-list.component';
import { CalendarYearItemComponent } from './components/calendar-year-item/calendar-year-item.component';



@NgModule({
  declarations: [
    CalendarComponent,
    CalendarYearListComponent,
    CalendarYearItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
