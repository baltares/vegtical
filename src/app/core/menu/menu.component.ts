import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  opened?: boolean;
  year: number;

  constructor() {
    this.year = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
