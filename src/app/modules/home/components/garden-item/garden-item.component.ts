import { Component, Input, OnInit } from '@angular/core';
import { GardenData2Model } from '@core/models/garden-data2.model';

@Component({
  selector: 'app-garden-item',
  templateUrl: './garden-item.component.html',
  styleUrls: ['./garden-item.component.scss']
})
export class GardenItemComponent implements OnInit {

  @Input() garden:GardenData2Model;
  constructor() { }

  ngOnInit(): void {
  }

}
