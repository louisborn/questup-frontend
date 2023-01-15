import { createAction, props } from "@ngrx/store";


export const fillQuestsPageData = createAction(
    '[Quests] Fill Quests Page Data',
    props<{quests: any, annual_rewards: any, student_completed_quests: any}>()
);