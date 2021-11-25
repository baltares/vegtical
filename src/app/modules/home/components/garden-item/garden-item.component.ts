import { Component, Input, OnInit } from '@angular/core';
import { GardenDataModel } from '@core/models/garden-data.model';

@Component({
  selector: 'app-garden-item',
  templateUrl: './garden-item.component.html',
  styleUrls: ['./garden-item.component.scss']
})
export class GardenItemComponent implements OnInit {

  @Input() garden:GardenDataModel;
  constructor() { }

  ngOnInit(): void {
  }

}
