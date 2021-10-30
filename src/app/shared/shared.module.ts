import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';

import { NavbarSectionComponent } from './components/navbar-section/navbar-section.component';



@NgModule({
  declarations: [
    NavbarSectionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarSectionComponent
  ]
})
export class SharedModule { }
