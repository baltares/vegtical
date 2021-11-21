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
  private dbUsersGardens = '/UsersGardens';
  plantListRef: AngularFireList<PlantDataModel>;
  gardenListRef: AngularFireList<any>;
  userListRef: AngularFireList<any>;
  usergardenListRef: AngularFireList<any>;
  temporaryGarden: GardenDataModel;


  constructor(private db: AngularFireDatabase) { 
    this.plantListRef = db.list(this.dbPlants);
    this.gardenListRef = db.list(this.dbGardens);
    this.userListRef = db.list(this.dbUsers);
    this.usergardenListRef = db.list(this.dbUsersGardens);
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
  getUserGardenList(): AngularFireList<any> {
    return this.usergardenListRef;
  }

  //CREATE
  createUserGarden(userGarden:any): any {
    return this.usergardenListRef.push(userGarden);
  }

  //UPDATE
  updateUserGarden(id:string, value:any): Promise<void> {
    return this.usergardenListRef.update(id, value);
  }

  //DELETE ONE
  deleteOneUserGarden(id:string): Promise<void> {
    return this.usergardenListRef.remove(id);
  }

  //DELETE ALL
  deleteAllUserGarden(): Promise<void> {
    return this.usergardenListRef.remove();
  }

  //Manage temporary garden
  createTempGarden(name:string, height:number, width:number): void {
  this.temporaryGarden = new GardenData(name,height,width);
  }
  getTempGarden(): GardenData {
    return this.temporaryGarden;
  }
  saveTempGarden(): void {
    this.temporaryGarden = null;
  }

}
