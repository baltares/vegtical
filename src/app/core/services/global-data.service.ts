import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalDataModel } from '@core/models/global-data.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  globalData: any = {};

  constructor(private http: HttpClient) {
    // this.loadGlobalData();
  }

  // private loadGlobalData() {
  //   this.http
  //     .get('assets/data/global-data.json')
  //     .subscribe((resp: GlobalDataModel) => {
  //       this.globalData = resp;
  //     });
  // }

  getGlobalData(){
    return this.http.get('assets/data/global-data.json');
  }
}
