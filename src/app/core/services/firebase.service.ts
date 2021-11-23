import { Injectable } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { GardenDataModel } from '@core/models/garden-data.model';
import { GardenData } from '@core/classes/garden-data';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPlants = '/Plants';
  private dbGardens = '/Gardens';
  private dbUsers = '/Users';
  plantListRef: AngularFireList<PlantDataModel>;
  gardenListRef: AngularFireList<any>;
  userListRef: AngularFireList<any>;
  temporaryGarden: GardenDataModel;


  constructor(private db: AngularFireDatabase) { 
    this.plantListRef = this.db.list(this.dbPlants);
    this.gardenListRef = this.db.list(this.dbGardens);
    this.userListRef = this.db.list(this.dbUsers);
  }

  //GET ALL
  getPlantList(): AngularFireList<PlantDataModel> {
    return this.plantListRef;
  }
  getGardenList(): AngularFireList<any> {
    return this.gardenListRef;
  }
  getUserList(): AngularFireList<any> {
    return this.userListRef;
  }

  //GET ONE

  //CREATE
  createGarden(garden:any): any {
    return this.gardenListRef.push(garden);
  }

  //UPDATE
  updateGarden(id:string, value:any): Promise<void> {
    return this.gardenListRef.update(id, value);
  }

  //DELETE ONE
  deleteOneGarden(id:string): Promise<void> {
    return this.gardenListRef.remove(id);
  }

  //DELETE ALL
  deleteAllGardens(): Promise<void> {
    return this.gardenListRef.remove();
  }

  //Manage temporary garden
  createTempGarden(name:string, height:number, width:number): void {
  this.temporaryGarden = new GardenData(name,height,width);
  }
  getTempGarden(): GardenData {
    return this.temporaryGarden;
  }

}
