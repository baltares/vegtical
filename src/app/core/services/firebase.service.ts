import { Injectable } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPlants = '/Plants';
  plantListRef: AngularFireList<PlantDataModel>;


  constructor(private db: AngularFireDatabase) { 
    this.plantListRef = db.list(this.dbPlants)
  }
}
