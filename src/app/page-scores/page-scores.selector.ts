import {createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromScores from '../page-scores/page-scores.reducer';

export const selectQuestsState = createFeatureSelector<fromScores.ScoresState>(
    fromScores.scoresFeatureKey,
);

export const selectQuests = createSelector(
    selectQuestsState,
    (state: fromScores.ScoresState) => ({
        predicted_grade: state.predicted_grade,
        total_gained_points: state.total_gained_points,
        total_quests_completed: state.total_quests_completed,
        total_quests_available: state.total_quests_available,
        loading: state.loading,
    })
);