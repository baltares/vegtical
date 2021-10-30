import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { PlantDetailComponent } from './pages/plant-detail/plant-detail.component';



@NgModule({
  declarations: [
    PlantDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    PlantDetailComponent
  ]
})
export class PlantDetailModule { }
