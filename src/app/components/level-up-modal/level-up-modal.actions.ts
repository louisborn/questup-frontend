import { createAction, props } from "@ngrx/store";

export const changePage = createAction(
    '[Level Up] Change Page',
    props<{indicator: number}>()
);