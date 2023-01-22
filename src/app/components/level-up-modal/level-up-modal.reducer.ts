import { createReducer, on } from '@ngrx/store';
import * as LevelUpFeatActions from './level-up-modal.actions';

export const levelUpFeatureKey = 'levelUpRootState'

export interface LevelUpFeatState {
  indicator: number;
  studytime: number;
}

export const initialState: LevelUpFeatState = {
  indicator: 0,
  studytime: 0,
};

export const levelUpFeatReducer = createReducer(
  initialState,
  on(
    LevelUpFeatActions.changePage,
    (state: LevelUpFeatState, { indicator }) => ({
      ...state,
      indicator: indicator,
    })
  )
);
