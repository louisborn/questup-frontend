import { Action, createReducer, on } from '@ngrx/store';
import * as ScoresActions from '../page-scores/page-scores.actions';

export const scoresFeatureKey = 'scoresRootState';

export interface UserPersonalState {
  traveltime: number;
  absences: number;
  freetime: number;
  goout: number;
  g1: number;
  g2: number;
  failures: number;
  studytime: number;
}

export interface ScoresState {
  predicted_grade: number;
  total_gained_points: number;
  total_quests_completed: number;
  total_quests_available: number;
  user_personal: UserPersonalState;
  user_activity_log: any;
  loading: boolean;
}

export const initialState: ScoresState = {
  predicted_grade: -9999,
  total_gained_points: -9999,
  total_quests_completed: -9999,
  total_quests_available: -9999,
  user_personal: {
    traveltime: 0,
    absences: 0,
    freetime: 0,
    goout: 0,
    g1: 0,
    g2: 0,
    failures: 0,
    studytime: 0,
  },
  user_activity_log: null,
  loading: false,
};

export const scoreReducer = createReducer(
  initialState,
  on(ScoresActions.fillScoresPageData, (state: ScoresState, { scores }) => ({
    ...state,
    predicted_grade: scores.predicted_grade,
    total_gained_points: scores.total_gained_points,
    total_quests_completed: scores.total_quests_completed,
    total_quests_available: scores.total_quests_available,
    user_personal: scores.user_personal,
    user_activity_log: scores.activity_log,
  })),
  on(ScoresActions.toggleLoading, (state: ScoresState, {}) => ({
    ...state,
    loading: !state.loading,
  }))
);
