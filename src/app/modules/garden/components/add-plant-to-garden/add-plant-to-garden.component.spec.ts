import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantToGardenComponent } from './add-plant-to-garden.component';

describe('AddPlantToGardenComponent', () => {
  let component: AddPlantToGardenComponent;
  let fixture: ComponentFixture<AddPlantToGardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlantToGardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantToGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
