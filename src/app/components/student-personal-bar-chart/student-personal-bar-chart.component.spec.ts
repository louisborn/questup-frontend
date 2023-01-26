import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPersonalBarChartComponent } from './student-personal-bar-chart.component';

describe('StudentPersonalBarChartComponent', () => {
  let component: StudentPersonalBarChartComponent;
  let fixture: ComponentFixture<StudentPersonalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPersonalBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPersonalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
