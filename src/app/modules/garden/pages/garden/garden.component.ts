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
  // garden: GardenData = new GardenData();

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pageTitle = params['name'];
    });
  }

}
