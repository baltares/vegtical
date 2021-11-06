import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar-section',
  templateUrl: './navbar-section.component.html',
  styleUrls: ['./navbar-section.component.scss']
})
export class NavbarSectionComponent implements OnInit {

  @Input() pageTitle:string;

  constructor(private _location: Location) { 
    this.pageTitle = "Título de la sección";
  }

  ngOnInit(): void {}

  onBack() {
    this._location.back();
  }

}
