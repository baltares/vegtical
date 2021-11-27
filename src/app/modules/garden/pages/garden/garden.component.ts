import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { GardenData } from '@core/classes/garden-data';
import { GardenData2 } from '@core/classes/garden-data2';
import { FirestoreService } from '@core/services/firestore.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss']
})
export class GardenComponent implements OnInit {
  pageTitle:string;
  garden: GardenData;
  garden2: GardenData2;
  userGardens2: GardenData2[];
  userName: string;

  constructor(
    private route: ActivatedRoute,
    private firestore: FirestoreService,
    private auth: AuthService
  ) {

    this.garden = new GardenData("test_user","test_garden",1.2,0.8,[14,7,14,999,14,3,4,3,12,3,6,13,16,2,6,9,0,9,0,9]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pageTitle = params['name'];
    });
    if (this.auth.user$)
    this.auth.user$.subscribe((profile) => {
      if (profile != null) this.userName = profile.sub;
      console.log(this.userName);
      if (this.userName) this.loadUserGardens2();
      console.log(this.userGardens2);
      if(this.userGardens2) this.garden2 = this.userGardens2.find(garden => garden.name === this.pageTitle);
      console.log(this.garden2);
    });
    this.navBarShadow();
  }

  navBarShadow(){
    document.getElementById("header-toolbar").setAttribute('style','box-shadow:none');
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

  exitGarden() {}

  saveGarden() {}
}
