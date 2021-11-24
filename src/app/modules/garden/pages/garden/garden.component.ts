import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GardenData } from '@core/classes/garden-data';
import { FirebaseService } from '@core/services/firebase.service';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss']
})
export class GardenComponent implements OnInit {
  pageTitle:string;
  garden: GardenData;

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService
  ) {

    this.garden = new GardenData("test_user","test_garden",1.2,0.8,[14,7,14,999,14,3,4,3,12,3,6,13,16,2,6,9,0,9,0,9]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pageTitle = params['name'];
    });
    this.navBarShadow();
  }

  navBarShadow(){
    document.getElementById("header-toolbar").setAttribute('style','box-shadow:none');
  }

  exitGarden() {}

  saveGarden() {}
}
