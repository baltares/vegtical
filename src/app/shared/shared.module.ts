import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarSectionComponent } from './components/navbar-section/navbar-section.component';
import { PlantListRowComponent } from './components/plant-list-row/plant-list-row.component';
import { PlantItemRowComponent } from './components/plant-item-row/plant-item-row.component';
import { ToolSearchComponent } from './components/tool-search/tool-search.component';

const components = [NavbarSectionComponent, PlantListRowComponent, PlantItemRowComponent,
  ToolSearchComponent];

@NgModule({
  declarations: [
    components,
    ToolSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    components
  ]
})
export class SharedModule { }
