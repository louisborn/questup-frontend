import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentActivityHeatMapComponent } from './student-activity-heat-map.component';

describe('StudentActivityHeatMapComponent', () => {
  let component: StudentActivityHeatMapComponent;
  let fixture: ComponentFixture<StudentActivityHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentActivityHeatMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentActivityHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
