import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpIndicatorComponent } from './setp-indicator.component';

describe('SetpIndicatorComponent', () => {
  let component: SetpIndicatorComponent;
  let fixture: ComponentFixture<SetpIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetpIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetpIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
