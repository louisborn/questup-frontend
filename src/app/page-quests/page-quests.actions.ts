import { createAction, props } from "@ngrx/store";


export const fillQuestsPageData = createAction(
    '[Quests] Fill Quests Page Data',
    props<{quests: any, annual_rewards: any, student_completed_quests: any}>()
);

export const addQuestToCompleted = createAction(
    '[Quests] Add Quest To Completed',
    props<{quest_id: string}>()
);

export const toggleLoading = createAction(
    '[Quests] Toggle Loading'
);