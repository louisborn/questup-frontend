import { createReducer, on } from '@ngrx/store';
import * as QuestsActions from '../page-quests/page-quests.actions';

export const questsFeatureKey = 'questsRootState';

export interface QuestsState {
  quests: any;
  annual_rewards: any;
  student_completed_quests: any;
  loading: boolean;
}

export const initialState: QuestsState = {
  quests: null,
  annual_rewards: null,
  student_completed_quests: null,
  loading: false,
};

export const questsReducer = createReducer(
  initialState,
  on(
    QuestsActions.fillQuestsPageData,
    (
      state: QuestsState,
      { quests, annual_rewards, student_completed_quests }
    ) => ({
      ...state,
      quests: quests,
      annual_rewards: annual_rewards,
      student_completed_quests: student_completed_quests,
    })
  ),
  on(QuestsActions.addQuestToCompleted, (state: QuestsState, { quest_id }) => ({
    ...state,
    student_completed_quests: [...state.student_completed_quests, quest_id],
  })),
  on(QuestsActions.toggleLoading, (state: QuestsState, {}) => ({
    ...state,
    loading: !state.loading,
  }))
);
