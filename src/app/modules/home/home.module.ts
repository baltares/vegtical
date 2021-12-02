import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { GardenListComponent } from './components/garden-list/garden-list.component';
import { GardenItemComponent } from './components/garden-item/garden-item.component';
import { AddGardenComponent } from './components/add-garden/add-garden.component';
import { AvailablePlantsComponent } from './components/available-plants/available-plants.component';


@NgModule({
  declarations: [
    HomeComponent,
    GardenListComponent,
    GardenItemComponent,
    AddGardenComponent,
    AvailablePlantsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]

})
export class HomeModule { }
