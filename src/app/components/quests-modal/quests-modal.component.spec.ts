import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestsModal } from './quests-modal.component';

describe('SimpleModalComponent', () => {
  let component: QuestsModal;
  let fixture: ComponentFixture<QuestsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestsModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
