import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@core/core.module';
import { HomeModule } from '@modules/home/home.module';
import { GardenModule } from '@modules/garden/garden.module';
import { CalendarModule } from '@modules/calendar/calendar.module';
import { PlantDetailModule } from '@modules/plant-detail/plant-detail.module';
import { PlantLibraryModule } from '@modules/plant-library/plant-library.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    GardenModule,
    CalendarModule,
    PlantDetailModule,
    PlantLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }