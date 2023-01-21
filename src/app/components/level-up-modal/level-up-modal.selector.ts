import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromLevelUpFeat from '../level-up-modal/level-up-modal.reducer';

export const selectLevelUpFeatState = createFeatureSelector<fromLevelUpFeat.LevelUpFeatState>(fromLevelUpFeat.levelUpFeatureKey);

export const selectLevelUpFeat = createSelector(
    selectLevelUpFeatState,
    (state: fromLevelUpFeat.LevelUpFeatState) => ({
        indicator: state.indicator,
    })
);