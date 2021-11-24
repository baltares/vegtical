import { Injectable } from '@angular/core';
import { PlantDataModel } from '@core/models/plant-data.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { GardenDataModel } from '@core/models/garden-data.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPlants = '/Plants';
  private dbGardens = '/Gardens';
  plantListRef: AngularFireList<PlantDataModel>;
  gardenListRef: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) { 
    this.plantListRef = this.db.list(this.dbPlants);
    this.gardenListRef = this.db.list(this.dbGardens);
  }

  //GET ALL
  getPlantList(): AngularFireList<PlantDataModel> {
    return this.plantListRef; 
  }
  getGardenList(): AngularFireList<any> {
    return this.gardenListRef;
  }
  getUserGardens(userName:string): AngularFireList<any> {
    return this.db.list('/Gardens/'+userName);
  }
  getOneGarden(userName:string, gardenName:string): AngularFireList<any> {
    return this.gardenListRef;
  }
  
  // firebase.database().ref('/tests')
  //  .orderByChild("serie").equalTo("0")
  //  .on('value', (data: DataSnapshot) => {
  //        data.forEach((child: DataSnapshot) => {
  //           console.log(child.key, child.val());
  //        });

  //CREATE
  createUser(garden:GardenDataModel): any {
    return this.gardenListRef.push(garden);
  }
  createGarden(garden:GardenDataModel): any {
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

}
