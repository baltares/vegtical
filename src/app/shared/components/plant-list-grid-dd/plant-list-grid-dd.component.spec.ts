import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListGridDdComponent } from './plant-list-grid-dd.component';

describe('PlantListGridDdComponent', () => {
  let component: PlantListGridDdComponent;
  let fixture: ComponentFixture<PlantListGridDdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantListGridDdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListGridDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
