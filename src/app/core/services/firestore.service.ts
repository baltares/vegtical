import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { GardenData2Model } from '@core/models/garden-data2.model';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private dbPath = '/gardens';
  userGardensRef: AngularFirestoreCollection<GardenData2Model> = null;
  defaultGardensRef: AngularFirestoreCollection<GardenData2Model> = null;

  constructor(private db: AngularFirestore) { }

  //CRUD FUNCTIONS WITH FIRESTORE DATABASE
  
  /**
   * Function to get the gardens ref of user from parameter
   * @param userName 
   * @returns userGardensRef
   */
  getAllUserGardens(userName: string): AngularFirestoreCollection<GardenData2Model> {
    this.userGardensRef = this.db
      .collection(this.dbPath)
      .doc(userName)
      .collection('userGardens');
    return this.userGardensRef;
  }
  /**
   * Function to get the default gradens ref
   * @returns defaultGardensRef
   */
  getAllDefaultGardens(): AngularFirestoreCollection<GardenData2Model> {
    this.defaultGardensRef = this.db
      .collection(this.dbPath)
      .doc('default_garden')
      .collection('userGardens');
    return this.defaultGardensRef;
  }
  /**
   * Function to create a new garden
   * @param gardenName
   * @param garden 
   * @returns 
   */
  createGarden(gardenName: string, garden: GardenData2Model): any {
    return this.userGardensRef.doc(gardenName).set(garden);
  }
  /**
   * Function to update data in a garden
   * @param gardenName 
   * @param data 
   * @returns 
   */
  update(gardenName: string, data: any): Promise<void> {
    return this.userGardensRef.doc(gardenName).update(data);
  }
  /**
   * Function to delete a garden
   * @param gardenName 
   * @returns 
   */
  delete(gardenName: string): Promise<void> {
    return this.userGardensRef.doc(gardenName).delete();
  }
}
