import { Component, Input, OnInit } from '@angular/core';
import { FirebasedbService } from '@core/services/firebasedb.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PlantDataModel } from '@core/models/plant-data.model';
import { Router } from '@angular/router';

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
  @Input() inputText: string;

  constructor(
    private _firebasedbService: FirebasedbService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //subscription to changes on inputSearch
    this.filteredOptions = this.inputSearch.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    //subscription to get list of plants and options array
    this._firebasedbService
      .getPlants()
      .subscribe((params: PlantDataModel[]) => {
        this.plantsList = params;
        this.options = this.plantsList.map((plant) => plant.nameCommon);
      });
  }

  /**
   * Function to filter results
   * @param value 
   * @returns 
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  /**
   * Function to navigate to searched plant when enter key up
   * @returns 
   */
  checkPlant(): void {
    if (this.options.includes(this.inputText))
      this._router.navigate(['/plant-detail', this.inputText]);
    else return;
  }
}
