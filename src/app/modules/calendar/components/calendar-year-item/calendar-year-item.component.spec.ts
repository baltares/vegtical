import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarYearItemComponent } from './calendar-year-item.component';

describe('CalendarYearItemComponent', () => {
  let component: CalendarYearItemComponent;
  let fixture: ComponentFixture<CalendarYearItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarYearItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarYearItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
