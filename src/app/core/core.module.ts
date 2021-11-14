import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@material/material.module';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    UserComponent
  ]
})
export class CoreModule { }
