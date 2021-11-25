import { Injectable } from '@angular/core';
import { GardenDataModel } from '@core/models/garden-data.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private dbGardens = '/Gardens';
  gardenListRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.gardenListRef = this.db.list(this.dbGardens);
  }

  getAllGardens():AngularFireList<GardenDataModel>{
    return this.gardenListRef;
  }

  getUserGardens():AngularFireList<GardenDataModel>{
    return;
  }

  createGarden(garden: GardenDataModel): any {
    return this.gardenListRef.push(garden);
  }

  update(key: string, value: any): Promise<void> {
    return this.gardenListRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.gardenListRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.gardenListRef.remove();
  }
}
