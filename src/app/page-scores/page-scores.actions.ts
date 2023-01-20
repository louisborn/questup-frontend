import { createAction, props } from "@ngrx/store";

export const fillScoresPageData = createAction(
    '[Scores] Fill Scores Page Data',
    props<{scores: any}>(),
);

export const toggleLoading = createAction(
    '[Quests] Toggle Loading'
);