import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebasedbService } from '@core/services/firebasedb.service';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss']
})
export class GardenComponent implements OnInit {
  pageTitle:string;

  constructor(
    private route: ActivatedRoute,
    private _firebasedbService: FirebasedbService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pageTitle = params['name'];
    });
  }

}
