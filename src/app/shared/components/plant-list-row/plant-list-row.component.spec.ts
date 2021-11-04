import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListRowComponent } from './plant-list-row.component';

describe('PlantListRowComponent', () => {
  let component: PlantListRowComponent;
  let fixture: ComponentFixture<PlantListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantListRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
