import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './pages/home/home.component';
import { GardenListComponent } from './components/garden-list/garden-list.component';
import { GardenItemComponent } from './components/garden-item/garden-item.component';
import { AddGardenComponent } from './components/add-garden/add-garden.component';

@NgModule({
  declarations: [
    HomeComponent,
    GardenListComponent,
    GardenItemComponent,
    AddGardenComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]

})
export class HomeModule { }
