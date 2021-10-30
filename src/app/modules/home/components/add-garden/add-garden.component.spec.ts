import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGardenComponent } from './add-garden.component';

describe('AddGardenComponent', () => {
  let component: AddGardenComponent;
  let fixture: ComponentFixture<AddGardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
