import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() questPoints = 0;

  @Output() closeModalEvent = new EventEmitter<string>();

  hasEmptyFields: boolean = false;

  constructor(private service: ServiceQuestsService) {}

  emitCloseModalEvent(value: string) {
    this.closeModalEvent.emit(value);
  }

  saveUserInput(questId: string, pointsEarned: number) {
    let questionInputFields = document.querySelectorAll<HTMLInputElement>('[id^=quest_question__]');
    let results:any = {}
    let hasEmptyInput:boolean = false;
    questionInputFields.forEach((input, idx) => {
      if (input.value == null || input.value == "") {
        hasEmptyInput = true;
        return;
      }
      results[idx] = input.value;
    });
    if (!hasEmptyInput) {
      this.service.saveQuestToCompleted(results, questId, pointsEarned).subscribe((result) => {
        if (result == 'Okay') this.emitCloseModalEvent('close');
      })
    } else {
      this.toggleHasEmptyFieldError(hasEmptyInput);
    }
  }

  toggleHasEmptyFieldError(value: boolean) {
    value ? this.hasEmptyFields = true : this.hasEmptyFields = false;
  }
}
