import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { GardenComponent } from '@modules/garden/pages/garden/garden.component';
import { PlantDetailComponent } from '@modules/plant-detail/pages/plant-detail/plant-detail.component';
import { PlantLibraryComponent } from '@modules/plant-library/pages/plant-library/plant-library.component';
import { CalendarComponent } from '@modules/calendar/pages/calendar/calendar.component';
import { UserComponent } from '@core/user/user.component';

//Import auth guard
import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'garden/:name', component: GardenComponent, canActivate: [AuthGuard]}, 
  {path:'plant-detail/:name', component: PlantDetailComponent},
  {path:'plant-library', component: PlantLibraryComponent},
  {path:'calendar', component: CalendarComponent},
  {path:'user', component: UserComponent, canActivate: [AuthGuard]},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
