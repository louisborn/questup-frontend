import { createAction, props } from "@ngrx/store";


export const fillQuests = createAction(
    '[Quests] Fill Quests',
    props<{quests: any;}>()
);