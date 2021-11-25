import { Injectable } from '@angular/core';
import { GardenDataModel } from '@core/models/garden-data.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService2 {

  private dbUsers = '/Users';
  private dbGardensRoot = '/Gardens/';
  userListObjectRef: AngularFireObject<any>;
  gardenListObjectRef: AngularFireObject<any>;
  gardenObjectRef: AngularFireObject<any>;

  private dbGardens = '/Gardens';
  gardenListRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { 
    this.userListObjectRef = this.db.object(this.dbUsers);

    this.gardenListRef = this.db.list(this.dbGardens);
  }

  //GET ALL
  getUserListObject(): AngularFireObject<any> {
    return this.userListObjectRef;
  }
  getUserGardens(userName:string): AngularFireObject<any> {
    this.gardenListObjectRef = this.db.object(this.dbGardensRoot+userName);
    return this.gardenListObjectRef;
  }
  getOneGarden(userName:string, gardenName:string): any {
    this.gardenObjectRef = this.db.object(this.dbGardensRoot+userName+'/'+gardenName);
    return this.gardenObjectRef;
  }

      //Busca en gardens/usuario una propiedad(details) de nombre name y la asigna a una variable local this.name
    // return this.db.object('/Gardens/'+userName).valueChanges().subscribe(details => {
    //   this.name = details["name"];});

  //CREATE
  createUser(user:any): any {
    return this.userListObjectRef.set(user);
  }
  createUserGarden(garden:GardenDataModel): any {
    return this.gardenListObjectRef.set(garden);
  }

  //UPDATE
  updateUserGarden(userName:string, gardenName:string, garden:GardenDataModel): Promise<void> {
    return this.getOneGarden(userName, gardenName).update(garden);
  }

  //DELETE ONE
  deleteOneGarden(userName:string, gardenName:string): Promise<void> {
    return this.getOneGarden(userName, gardenName).remove();
  }

  // constructor(private db: AngularFireDatabase) { 
  //   this.plantObjectRef = this.db.list(this.dbPlants);
  //   this.gardenListRef = this.db.list(this.dbGardens);
  // }

  // //GET ALL
  // getPlantList(): AngularFireObject<PlantDataModel> {
  //   return this.plantObjectRef; 
  // }
  // getGardenList(): AngularFireObject<any> {
  //   return this.gardenListRef;
  // }
  // getUserGardens(userName:string): AngularFireObject<any> {
  //   return this.db.list('/Gardens/'+userName);
  // }
  // getOneGarden(userName:string, gardenName:string): AngularFireObject<any> {
  //   return this.gardenListRef;
  // }
  
  // // firebase.database().ref('/tests')
  // //  .orderByChild("serie").equalTo("0")
  // //  .on('value', (data: DataSnapshot) => {
  // //        data.forEach((child: DataSnapshot) => {
  // //           console.log(child.key, child.val());
  // //        });

  // //CREATE
  // createUser(garden:GardenDataModel): any {
  //   return this.gardenListRef.push(garden);
  // }
  createGarden(garden:GardenDataModel): any {
    return this.gardenListRef.push(garden);
  }

  // //UPDATE
  // updateGarden(id:string, value:any): Promise<void> {
  //   return this.gardenListRef.update(id, value);
  // }

  // //DELETE ONE
  // deleteOneGarden(id:string): Promise<void> {
  //   return this.gardenListRef.remove(id);
  // }

  // //DELETE ALL
  // deleteAllGardens(): Promise<void> {
  //   return this.gardenListRef.remove();
  // }

}
