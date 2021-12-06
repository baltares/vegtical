import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  globalData: any = {};

  constructor(private http: HttpClient) {}

  /**
   * Function to get the data from an archive with HttpClient
   * @returns 
   */
  getGlobalData() {
    return this.http.get('assets/data/global-data.json');
  }
}
