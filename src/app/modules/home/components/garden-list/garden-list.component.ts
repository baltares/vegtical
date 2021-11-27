import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { GardenDataModel } from '@core/models/garden-data.model';
import { GardenData2Model } from '@core/models/garden-data2.model';
import { FirebaseService } from '@core/services/firebase.service';
import { FirestoreService } from '@core/services/firestore.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-garden-list',
  templateUrl: './garden-list.component.html',
  styleUrls: ['./garden-list.component.scss']
})
export class GardenListComponent implements OnInit {
  
  userName:string;

  userGardens: GardenDataModel[];
  userGardens2: GardenData2Model[];

  constructor(public firebase:FirebaseService, private firestore:FirestoreService, public auth: AuthService) { }

  ngOnInit(): void {
    if (this.auth.user$)
    this.auth.user$.subscribe((profile) => {
      if (profile != null) this.userName = profile.sub;
      this.loadUserGardens2();
    });
    
  }


  loadUserGardens():void {
    this.firebase.getAllGardens().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.userGardens = data;
    });
  }

  loadUserGardens2():void {
    this.firestore.getAllUserGardens(this.userName).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.userGardens2 = data;
    });
  }

}
