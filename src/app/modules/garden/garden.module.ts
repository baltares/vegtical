import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { GardenComponent } from './pages/garden/garden.component';
import { ShowGardenComponent } from './components/show-garden/show-garden.component';
import { AddPlantToGardenComponent } from './components/add-plant-to-garden/add-plant-to-garden.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';



@NgModule({
  declarations: [
    GardenComponent,
    ShowGardenComponent,
    AddPlantToGardenComponent,
    DialogDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    GardenComponent
  ]
})
export class GardenModule { }
