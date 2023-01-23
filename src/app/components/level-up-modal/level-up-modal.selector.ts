import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromLevelUpFeat from '../level-up-modal/level-up-modal.reducer';

export const selectLevelUpFeatState = createFeatureSelector<fromLevelUpFeat.LevelUpFeatState>(fromLevelUpFeat.levelUpFeatureKey);

export const selectLevelUpFeat = createSelector(
    selectLevelUpFeatState,
    (state: fromLevelUpFeat.LevelUpFeatState) => ({
        indicator: state.indicator,
        studytime: state.studytime,
        g1: state.g1,
        g2: state.g2,
        failures: state.failures,
        absences: state.absences,
        freetime: state.freetime,
        goout: state.goout,
        traveltime: state.traveltime,
        prediction_result: state.prediction_result,
        user_personal: state.user_personal,
    })
);