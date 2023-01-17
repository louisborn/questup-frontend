import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css'],
})
export class QuestsComponent {
  @Input() quest: any;
  @Input() studentCompletedQuests: any;

  showQuestsModal: boolean = false;

  /** 
   * Checks if the quest has already been completed by the user
   */
  isCompleted() {
    return this.studentCompletedQuests.some(
      (entry: any) => entry.quests_id === this.quest._id
    );
  }

  /**
   * Toggles the modal visibility when button is pressed
   */
  toggleQuestsModal() {
    this.showQuestsModal = !this.showQuestsModal;
  }

  /**
   * Executes the modal event transmitted
   * @param value the modal event from the child (modal component)
   */
  proceedCloseModalEvent(value: string) {
    if (value == 'close') this.toggleQuestsModal();
  }
}
