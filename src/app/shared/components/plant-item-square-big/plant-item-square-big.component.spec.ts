import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantItemSquareBigComponent } from './plant-item-square-big.component';

describe('PlantItemSquareBigComponent', () => {
  let component: PlantItemSquareBigComponent;
  let fixture: ComponentFixture<PlantItemSquareBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantItemSquareBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantItemSquareBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
