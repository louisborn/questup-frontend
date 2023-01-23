import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGradeLineChartComponent } from './student-grade-line-chart.component';

describe('StudentGradeLineChartComponent', () => {
  let component: StudentGradeLineChartComponent;
  let fixture: ComponentFixture<StudentGradeLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGradeLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGradeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
