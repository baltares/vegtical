import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolFilterComponent } from './tool-filter.component';

describe('ToolFilterComponent', () => {
  let component: ToolFilterComponent;
  let fixture: ComponentFixture<ToolFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
