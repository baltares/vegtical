import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Components and Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


const MaterialComponents: any[] = [MatToolbarModule, MatIconModule, MatMenuModule, 
  MatSlideToggleModule, MatButtonModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents,
  ]
})
export class MaterialModule { }
