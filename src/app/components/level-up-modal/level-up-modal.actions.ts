import { createAction, props } from "@ngrx/store";

export const changePage = createAction(
    '[Level Up] Change Page',
    props<{indicator: number}>()
);

export const setStudyTime = createAction(
    '[Level Up] Set Study Time',
    props<{studytime: number}>()
);