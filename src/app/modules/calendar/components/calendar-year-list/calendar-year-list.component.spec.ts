import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarYearListComponent } from './calendar-year-list.component';

describe('CalendarYearListComponent', () => {
  let component: CalendarYearListComponent;
  let fixture: ComponentFixture<CalendarYearListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarYearListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarYearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
