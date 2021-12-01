import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Components and Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';


const materialComponents: any[] = [MatToolbarModule, MatIconModule, MatMenuModule, 
  MatSlideToggleModule, MatButtonModule, MatCardModule, MatTabsModule, MatProgressBarModule,
  MatAutocompleteModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatRadioModule, 
  MatExpansionModule, MatGridListModule, MatDialogModule, MatTooltipModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents
  ],
  exports: [
    materialComponents,
  ]
})
export class MaterialModule { }
