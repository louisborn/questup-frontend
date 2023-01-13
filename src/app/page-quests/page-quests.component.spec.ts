import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuestsComponent } from './page-quests.component';

describe('PageQuestsComponent', () => {
  let component: PageQuestsComponent;
  let fixture: ComponentFixture<PageQuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageQuestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
