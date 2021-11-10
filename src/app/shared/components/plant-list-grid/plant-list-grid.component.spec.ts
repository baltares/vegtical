import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListGridComponent } from './plant-list-grid.component';

describe('PlantListGridComponent', () => {
  let component: PlantListGridComponent;
  let fixture: ComponentFixture<PlantListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantListGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
