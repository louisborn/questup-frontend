import { Action, createReducer, on } from "@ngrx/store";
import * as QuestsActions from '../page-quests/page-quests.actions';

export const questsFeatureKey = 'questsRootState';

export interface QuestsState {
    quests: any;
    annual_rewards: any;
}

export const initialState: QuestsState = {
    quests: null,
    annual_rewards: null,
}

export const questsReducer = createReducer(
    initialState,
    on(QuestsActions.fillQuestsPageData,
        (state: QuestsState, {quests, annual_rewards}) => ({...state, quests: quests, annual_rewards: annual_rewards}))
);