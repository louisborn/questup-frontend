import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fillQuests } from './page-quests.actions';

@Injectable({
  providedIn: 'root'
})
export class ServiceQuestsService {

  constructor(private store: Store) { }

  testService() {
    this.store.dispatch(fillQuests({quests: ['testQuest']}))
  }
}
