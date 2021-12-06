import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

//Plant library components
import { PlantLibraryComponent } from './pages/plant-library/plant-library.component';

@NgModule({
  declarations: [PlantLibraryComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [PlantLibraryComponent],
})
export class PlantLibraryModule {}
