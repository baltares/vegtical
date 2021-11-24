import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FirebasedbService } from '@core/services/firebasedb.service';
import { PlantDataModel } from '@core/models/plant-data.model';

@Component({
  selector: 'app-navbar-section',
  templateUrl: './navbar-section.component.html',
  styleUrls: ['./navbar-section.component.scss']
})
export class NavbarSectionComponent implements OnInit, OnChanges {

  @Input() pageTitle:string;
  @Input() section:string;
  plantsList: PlantDataModel[];
  index: number;

  constructor(private _location: Location,private _router: Router,private _firebasedbService:FirebasedbService ){}

  ngOnInit(): void {
    this._firebasedbService.getPlants()
    .subscribe((params: PlantDataModel[]) => {
      this.plantsList = params;
      this.index = this.plantsList.map(plant => plant.nameCommon).indexOf(this.pageTitle);
    });
    // this.selectLinks();
}

ngOnChanges(changes: any): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  // this.selectLinks();
  
}

  // selectLinks(){
  //   if(this.section=='plant-detail'){
  //     // document.getElementById('navSectionEdit').classList.add('display-none');
  //     // document.getElementById('navSectionDelete').classList.add('display-none');
  //     document.getElementById('navSectionEdit').setAttribute('style','display:none');
  //     document.getElementById('navSectionDelete').setAttribute('style','display:none');
  //   } else if (this.section=='garden'){
  //     // document.getElementById('navSectionEdit').classList.add('display-none');
  //     // document.getElementById('navSectionListNavigation').classList.add('display-none');
  //     document.getElementById('navSectionEdit').setAttribute('style','display:none');
  //     document.getElementById('navSectionListNavigation').setAttribute('style','display:none');
  //   }
  // }

  onBack() {
    this._location.back();
  }
  previousItem(){
    if (this.index>0) {
      this._router.navigate(['/plant-detail', this.plantsList[this.index-1].nameCommon]);
      this.index = this.index-1;
    }
  }
  nextItem(){
    if (this.index<this.plantsList.length) {
      this._router.navigate(['/plant-detail', this.plantsList[this.index+1].nameCommon]);
      this.index = this.index+1;
    }
  }

}
