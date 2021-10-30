import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { CalendarComponent } from './pages/calendar/calendar.component';



@NgModule({
  declarations: [
    CalendarComponent
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
