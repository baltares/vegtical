import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantLibraryComponent } from './pages/plant-library/plant-library.component';



@NgModule({
  declarations: [
    PlantLibraryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlantLibraryComponent
  ]
})
export class PlantLibraryModule { }
