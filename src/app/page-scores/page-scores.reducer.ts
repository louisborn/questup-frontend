import { Action, createReducer, on } from '@ngrx/store';
import * as ScoresActions from '../page-scores/page-scores.actions';

export const scoresFeatureKey = 'scoresRootState';

export interface ScoresState {
  predicted_grade: number;
  total_gained_points: number;
  total_quests_completed: number;
  total_quests_available: number;
  loading: boolean;
}

export const initialState: ScoresState = {
  predicted_grade: -9999,
  total_gained_points: -9999,
  total_quests_completed: -9999,
  total_quests_available: -9999,
  loading: false,
};

export const scoreReducer = createReducer(
  initialState,
  on(ScoresActions.fillScoresPageData, (state: ScoresState, { scores }) => ({
    ...state,
    predicted_grade: scores.predicted_grade,
    total_gained_points: scores.total_gained_points,
    total_quests_completed: scores.total_quests_completed,
    total_quests_available: scores.total_available_quests,
  })),
  on(ScoresActions.toggleLoading, (state: ScoresState, {}) => ({
    ...state,
    loading: !state.loading,
  }))
);
