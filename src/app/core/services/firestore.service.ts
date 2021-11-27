import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GardenData2Model } from '@core/models/garden-data2.model';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private dbPath = '/gardens';
  private userKey:string;

  usersRef: AngularFirestoreCollection<any> = null;
  userGardensRef: AngularFirestoreCollection<GardenData2Model> = null;
  defaultGardensRef: AngularFirestoreCollection<GardenData2Model> = null;

  constructor(private db: AngularFirestore, private auth: AuthService) {
    this.getUser();
    this.usersRef = this.db.collection(this.dbPath);
    this.userGardensRef = this.db.collection(this.dbPath).doc(this.userKey).collection('userGardens');
  }

  getUser(): void {
    if (this.auth.user$)
    this.auth.user$.subscribe((profile) => {
      if (profile != null) this.userKey = profile.sub;
    });
  }

  // createUser(): void {
  //   // this.usersRef.add({ ...(this.userKey) });
  //   this.userGardensRef.doc(this.userKey).set(void);
  // }

  getAllUserGardens(): AngularFirestoreCollection<GardenData2Model> {
    return this.userGardensRef;
  }
  getAllDefaultGardens(): AngularFirestoreCollection<GardenData2Model> {
    this.defaultGardensRef = this.db.collection(this.dbPath).doc('default_garden').collection('userGardens');
    return this.defaultGardensRef;
  }

  createGarden(gardenName:string, garden: GardenData2Model): any {
    // return this.userGardensRef.add({ ...garden });
    return this.userGardensRef.doc(gardenName).set(garden);
  }

  update(gardenName: string, data: any): Promise<void> {
    return this.userGardensRef.doc(gardenName).update(data);
  }

  delete(gardenName: string): Promise<void> {
    return this.userGardensRef.doc(gardenName).delete();
  }

}
