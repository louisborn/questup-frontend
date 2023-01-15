import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent {
  @Input() quest:any;
  @Input() studentCompletedQuests:any;

  showQuestsModal:boolean = false;

  isCompleted() {
    return this.studentCompletedQuests.some((entry:any) => entry.quests_id === this.quest._id)
  }

  toggleQuestsModal() {
    this.showQuestsModal = !this.showQuestsModal;
  }

  proceedCloseModalEvent(value: string) {
    if (value == 'close') this.toggleQuestsModal();
  }
}
