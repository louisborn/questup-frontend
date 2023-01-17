import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceQuestsService } from 'src/app/page-quests/service-quests.service';

export interface QuestContent {
  title: string;
  questions: Array<any>;
}

export const initialState = {
  title: '',
  questions: [],
};

@Component({
  selector: 'app-quests-modal',
  templateUrl: './quests-modal.component.html',
  styleUrls: ['./quests-modal.component.css'],
})
export class QuestsModal {
  @Input() questId = '';
  @Input() questImageSource = '';
  @Input() questContent: QuestContent = initialState;
  @Input() questRewardPoints = 0;

  @Output() closeModalEvent = new EventEmitter<string>();

  hasEmptyFields: boolean = false;

  constructor(private service: ServiceQuestsService) {}

  emitCloseModalEvent(value: string) {
    this.closeModalEvent.emit(value);
  }

  _getQuestionInputFieldsFromDOM() {
    return document.querySelectorAll<HTMLInputElement>(
      '[id^=quest_question__]'
    );
  }

  _getInputFieldsValue(inputFields: NodeListOf<HTMLInputElement>) {
    let userInput: any = {};
    inputFields.forEach((input, idx) => {
      userInput[idx] = input.value;
    });
    return userInput;
  }

  _hasEmptyInputFieldsValue(inputFieldsValue: Object) {
    let values = Object.values(inputFieldsValue);
    let checkResult = values.find((entry:any) => entry == '' || entry == null);
    return (checkResult===undefined) ? false : true;
  }

  /**
   * 
   * @param questId the unique quest identifier
   * @param pointsEarned the reward points earned when submitting the quest
   */
  saveUserInput(questId: string, pointsEarned: number) {
    let questionInputFields = this._getQuestionInputFieldsFromDOM();
    let hasEmptyInput: boolean = false;
    let userInput = this._getInputFieldsValue(questionInputFields);
    
    if (this._hasEmptyInputFieldsValue(userInput)) {
      hasEmptyInput = true;
      this.toggleHasEmptyFieldAlert(hasEmptyInput);
    } else {
      this.service
        .saveQuestToCompleted(userInput, questId, pointsEarned)
        .subscribe((result) => {
          if (result == 'Okay') this.emitCloseModalEvent('close');
        });
    }
  }

  /**
   * Toggles the visibility of the alert
   * @param value the empty field state value
   */
  toggleHasEmptyFieldAlert(value: boolean) {
    this.hasEmptyFields = (value) ? true : false;
  }
}
