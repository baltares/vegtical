import { Component, OnInit } from '@angular/core';
import { GlobalDataModel } from '@core/models/global-data.model';
import { GlobalDataService } from '@core/services/global-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string;

  constructor(private _globalDataService: GlobalDataService) {}

  ngOnInit(): void {
    this._globalDataService.getGlobalData().subscribe((params:GlobalDataModel)=>{
      this.title = params.appTitle;
      console.log(this.title);
    });
  }
  
}