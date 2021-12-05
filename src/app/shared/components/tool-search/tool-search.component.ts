import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from '@core/services/firebasedb.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PlantDataModel } from '@core/models/plant-data.model';

@Component({
  selector: 'app-tool-search',
  templateUrl: './tool-search.component.html',
  styleUrls: ['./tool-search.component.scss'],
})
export class ToolSearchComponent implements OnInit {
  plantsList: PlantDataModel[];
  inputSearch = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;

  constructor(private _firebasedbService: FirebasedbService) {}

  ngOnInit(): void {
    this.filteredOptions = this.inputSearch.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this._firebasedbService.getPlants()
      .subscribe((params: PlantDataModel[]) => {
        this.plantsList = params;
        this.options = this.plantsList.map(plant => plant.nameCommon);
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
    // return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
