import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GardenData2Model } from '@core/models/garden-data2.model';

@Injectable({providedIn: 'root'})

export class FirestoreService {
  private dbPath = '/gardens';
  userGardensRef: AngularFirestoreCollection<GardenData2Model> = null;
  defaultGardensRef: AngularFirestoreCollection<GardenData2Model> = null;

  constructor(private db: AngularFirestore) {}

  getAllUserGardens(userName:string): AngularFirestoreCollection<GardenData2Model> {
    this.userGardensRef = this.db.collection(this.dbPath).doc(userName).collection('userGardens');
    return this.userGardensRef;
  }
  getAllDefaultGardens(): AngularFirestoreCollection<GardenData2Model> {
    this.defaultGardensRef = this.db.collection(this.dbPath).doc('default_garden').collection('userGardens');
    return this.defaultGardensRef;
  }
  createGarden(gardenName:string, garden: GardenData2Model): any {
    return this.userGardensRef.doc(gardenName).set(garden);
  }
  update(gardenName: string, data: any): Promise<void> {
    return this.userGardensRef.doc(gardenName).update(data);
  }
  delete(gardenName: string): Promise<void> {
    return this.userGardensRef.doc(gardenName).delete();
  }

}
