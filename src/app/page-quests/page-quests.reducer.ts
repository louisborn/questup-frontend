import { Action, createReducer, on } from "@ngrx/store";
import * as QuestsActions from '../page-quests/page-quests.actions';

export const questsFeatureKey = 'questsRootState';

export interface QuestsState {
    quests: any;
}

export const initialState: QuestsState = {
    quests: []
}

export const questsReducer = createReducer(
    initialState,
    on(QuestsActions.fillQuests,
        (state: QuestsState, {quests}) => ({...state, quests: quests}))
);