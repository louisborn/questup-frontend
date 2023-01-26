import { createReducer, on } from '@ngrx/store';
import * as LevelUpFeatActions from './level-up-modal.actions';

export const levelUpFeatureKey = 'levelUpRootState';

export interface LevelUpFeatState {
  indicator: number;
  studytime: number;
  g1: number;
  g2: number;
  failures: number;
  absences: number;
  freetime: number;
  goout: number;
  traveltime: number;
  prediction_result: Array<number>;
  user_personal: any;
}

export const initialState: LevelUpFeatState = {
  indicator: 0,
  studytime: 0,
  g1: 0,
  g2: 0,
  failures: 0,
  absences: 0,
  freetime: 0,
  goout: 0,
  traveltime: 0,
  prediction_result: [],
  user_personal: null,
};

export const levelUpFeatReducer = createReducer(
  initialState,
  on(
    LevelUpFeatActions.changePage,
    (state: LevelUpFeatState, { indicator }) => ({
      ...state,
      indicator: indicator,
    })
  ),
  on(
    LevelUpFeatActions.setToolUsageInput,
    (state: LevelUpFeatState, { studytime, g1, g2 }) => ({
      ...state,
      studytime: studytime,
      g1: g1,
      g2: g2,
    })
  ),
  on(
    LevelUpFeatActions.setFailuresAbsencesInput,
    (state: LevelUpFeatState, { failures, absences }) => ({
      ...state,
      failures: failures,
      absences: absences,
    })
  ),
  on(
    LevelUpFeatActions.setOthersInput,
    (state: LevelUpFeatState, { freetime, goout, traveltime }) => ({
      ...state,
      freetime: freetime,
      goout: goout,
      traveltime: traveltime,
    })
  ),
  on(
    LevelUpFeatActions.fillPredictionResult,
    (state: LevelUpFeatState, { result }) => ({
      ...state,
      prediction_result: result,
    })
  ),
  on(
    LevelUpFeatActions.fillUserPersonal,
    (state: LevelUpFeatState, { user_personal }) => ({
      ...state,
      user_personal: user_personal,
    })
  )
);
