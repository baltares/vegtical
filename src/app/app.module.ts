import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Import app modules
import { CoreModule } from '@core/core.module';
import { HomeModule } from '@modules/home/home.module';
import { GardenModule } from '@modules/garden/garden.module';
import { CalendarModule } from '@modules/calendar/calendar.module';
import { PlantDetailModule } from '@modules/plant-detail/plant-detail.module';
import { PlantLibraryModule } from '@modules/plant-library/plant-library.module';

//Import authentication
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env, environment } from '../environments/environment';

//Import Firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    GardenModule,
    CalendarModule,
    PlantDetailModule,
    PlantLibraryModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
