import { createAction, props } from "@ngrx/store";

export const changePage = createAction(
    '[Level Up] Change Page',
    props<{indicator: number}>()
);

export const setToolUsageInput = createAction(
    '[Level Up] Set Study Time',
    props<{studytime: number, g1: number, g2: number}>()
);

export const setFailuresAbsencesInput = createAction(
    '[Level Up] Set Failures Absences',
    props<{failures: number, absences: number}>()
);

export const setOthersInput = createAction(
    '[Level Up] Set Others',
    props<{freetime: number, goout: number, traveltime:number}>()
);

export const fillPredictionResult = createAction(
    '[Level Up] Fill Prediction Result',
    props<{result: Array<number>}>()
);

export const fillUserPersonal = createAction(
    '[Level Up] User Personal',
    props<{user_personal: Array<number>}>()
);
