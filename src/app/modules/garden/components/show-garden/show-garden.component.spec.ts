import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGardenComponent } from './show-garden.component';

describe('ShowGardenComponent', () => {
  let component: ShowGardenComponent;
  let fixture: ComponentFixture<ShowGardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
