import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { GardenComponent } from './pages/garden/garden.component';



@NgModule({
  declarations: [
    GardenComponent
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
