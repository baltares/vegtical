import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { PlantLibraryComponent } from './modules/plant-library/pages/plant-library/plant-library.component';
import { CalendarComponent } from './modules/calendar/pages/calendar/calendar.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'calendar', component: CalendarComponent},
  {path:'plant-library', component: PlantLibraryComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
