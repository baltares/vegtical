import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePlantsComponent } from './available-plants.component';

describe('AvailablePlantsComponent', () => {
  let component: AvailablePlantsComponent;
  let fixture: ComponentFixture<AvailablePlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablePlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablePlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
