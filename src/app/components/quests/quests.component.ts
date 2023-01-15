import { Component, Input } from '@angular/core';

export interface QuestInterface {
  _id: string;
  calender_week: string;
  publish_date_formatted: string;
  difficulty: string;
  points: number;
  content: any;
  subjects_id: number;
  teachers_id: string;
}

export const initialState: QuestInterface = {
  _id: "",
  calender_week: "",
  publish_date_formatted: "",
  difficulty: "",
  points: 0,
  content: {},
  subjects_id: 0,
  teachers_id: "",
}

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent {
  @Input() quest:any;
  @Input() studentCompletedQuests:any;

  isCompleted() {
    return this.studentCompletedQuests.some((entry:any) => entry.quests_id === this.quest._id)
  }
}
