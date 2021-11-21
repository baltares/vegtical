import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantIntervalsComponent } from './plant-intervals.component';

describe('PlantIntervalsComponent', () => {
  let component: PlantIntervalsComponent;
  let fixture: ComponentFixture<PlantIntervalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantIntervalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantIntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
