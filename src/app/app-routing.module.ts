import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { GardenComponent } from '@modules/garden/pages/garden/garden.component';
import { PlantDetailComponent } from '@modules/plant-detail/pages/plant-detail/plant-detail.component';
import { PlantLibraryComponent } from '@modules/plant-library/pages/plant-library/plant-library.component';
import { CalendarComponent } from '@modules/calendar/pages/calendar/calendar.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'garden/:name', component: GardenComponent},
  {path:'plant-detail/:name', component: PlantDetailComponent},
  {path:'plant-library', component: PlantLibraryComponent},
  {path:'calendar', component: CalendarComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }