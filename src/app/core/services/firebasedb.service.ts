import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebasedbService {
  // plantsData: PlantDataModel[] = [];

  constructor(private http: HttpClient) {
    // this.loadPlantsData();
  }

  // private loadPlantsData() {
  //   this.http.get('https://vegticaldb-default-rtdb.europe-west1.firebasedatabase.app/Plants.json')
  //     .subscribe((resp: PlantDataModel[]) => {
  //       this.plantsData = resp;
  //     });
  // }

  getPlants(){
    return this.http.get('https://vegticaldb-default-rtdb.europe-west1.firebasedatabase.app/Plants.json');
  }
}
