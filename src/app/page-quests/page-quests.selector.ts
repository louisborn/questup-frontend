import {createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromQuests from '../page-quests/page-quests.reducer';

export const selectQuestsState = createFeatureSelector<fromQuests.QuestsState>(
    fromQuests.questsFeatureKey,
);

export const selectQuests = createSelector(
    selectQuestsState,
    (state: fromQuests.QuestsState) => {
        state.quests
    }
);