import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestsState } from 'src/app/page-quests/page-quests.reducer';
import { ServiceQuestsService } from 'src/app/page-quests/service-quests.service';

export interface QuestContent {
  title: string;
  questions: Array<any>;
}

export const initialState = {
  title: '',
  questions: [],
}

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {
  @Input() questId = '';
  @Input() questImageSource = '';
  @Input() questContent:QuestContent = initialState;

  @Output() closeModalEvent = new EventEmitter<string>();

  hasEmptyFields: boolean = false;

  constructor(private service: ServiceQuestsService) {}

  emitCloseModalEvent(value: string) {
    this.closeModalEvent.emit(value);
  }

  saveUserInput(questId: string) {
    let questionInputFields = document.querySelectorAll<HTMLInputElement>('[id^=quest_question__]');
    let results:any = {}
    questionInputFields.forEach((input, idx) => {
      if (input == null) {
        this.toggleHasEmptyFieldError();
        return;
      }
      results[idx] = input.value;
    });
    this.service.saveQuestToCompleted(results, questId).subscribe((result) => {
      if (result == 'Okay') this.emitCloseModalEvent('close');
    })
  }

  toggleHasEmptyFieldError() {
    this.hasEmptyFields = !this.hasEmptyFields;
  }
}
