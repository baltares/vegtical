import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebasedbService {
  constructor(private http: HttpClient) {}

  /**
   * Function returning an observable with JSON of plants from Firebase
   */
  getPlants():Observable<any> {
    return this.http.get(
      'https://vegticaldb-default-rtdb.europe-west1.firebasedatabase.app/Plants.json'
    );
  }
}
