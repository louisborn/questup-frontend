import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromLevelUpFeat from '../level-up-modal/level-up-modal.reducer';
import { changePage } from './level-up-modal.actions';
import { selectLevelUpFeat } from './level-up-modal.selector';

@Component({
  selector: 'app-level-up-modal',
  templateUrl: './level-up-modal.component.html',
  styleUrls: ['./level-up-modal.component.css']
})
export class LevelUpModalComponent {
  @Output() closeModalEvent: EventEmitter<string> = new EventEmitter<string>;

  levelUpFeat$: Observable<fromLevelUpFeat.LevelUpFeatState>;

  constructor(private store: Store) {
    this.levelUpFeat$ = this.store.select(selectLevelUpFeat);
  }

  emitCloseModalEvent() {
    this.closeModalEvent.emit('close');
  }

  emitChangePage(currentPage:number, value: string) {
    let newPage:number = (value === 'next') ? (currentPage+1) : (currentPage-1);
    this.store.dispatch(changePage({indicator: newPage}));
  }
}
