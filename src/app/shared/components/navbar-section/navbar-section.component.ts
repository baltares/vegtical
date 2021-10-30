import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-section',
  templateUrl: './navbar-section.component.html',
  styleUrls: ['./navbar-section.component.scss']
})
export class NavbarSectionComponent implements OnInit {

  pageTitle?:string;

  constructor() { 
    this.pageTitle = "Título de la sección";
  }

  ngOnInit(): void {
  }

}
