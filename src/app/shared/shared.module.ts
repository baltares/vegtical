import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarSectionComponent } from './components/navbar-section/navbar-section.component';
import { PlantListRowComponent } from './components/plant-list-row/plant-list-row.component';
import { PlantItemRowComponent } from './components/plant-item-row/plant-item-row.component';
import { ToolSearchComponent } from './components/tool-search/tool-search.component';
import { PlantListGridComponent } from './components/plant-list-grid/plant-list-grid.component';
import { PlantItemSquareBigComponent } from './components/plant-item-square-big/plant-item-square-big.component';
import { PlantIntervalsComponent } from './components/plant-intervals/plant-intervals.component';
import { PlantListGridDdComponent } from './components/plant-list-grid-dd/plant-list-grid-dd.component';

const components = [NavbarSectionComponent, PlantListRowComponent, PlantItemRowComponent,
  PlantListGridComponent, PlantItemSquareBigComponent, ToolSearchComponent, PlantIntervalsComponent,
  PlantListGridDdComponent];

@NgModule({
  declarations: [
    components,
    PlantListGridDdComponent
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
