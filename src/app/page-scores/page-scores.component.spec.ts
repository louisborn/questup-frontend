import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScoresComponent } from './page-scores.component';

describe('PageScoresComponent', () => {
  let component: PageScoresComponent;
  let fixture: ComponentFixture<PageScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
