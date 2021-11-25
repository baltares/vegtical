import { Component, OnInit } from '@angular/core';
import { GardenDataModel } from '@core/models/garden-data.model';
import { FirebaseService } from '@core/services/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-garden-list',
  templateUrl: './garden-list.component.html',
  styleUrls: ['./garden-list.component.scss']
})
export class GardenListComponent implements OnInit {

  userGardens: GardenDataModel[];

  constructor(public firebase:FirebaseService) { }

  ngOnInit(): void {
    this.loadUserGardens();
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

}
