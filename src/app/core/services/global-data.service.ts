import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalDataModel } from '@core/models/global-data.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {

  info: GlobalDataModel = {};

  constructor(private _http: HttpClient) {
    this._http.get('assets/data/global-data.json').subscribe((resp:any) => {
      this.info=resp;
    });
  }
}
