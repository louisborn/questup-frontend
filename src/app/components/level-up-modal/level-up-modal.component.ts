import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromLevelUpFeat from '../level-up-modal/level-up-modal.reducer';
import { changePage, setStudyTime } from './level-up-modal.actions';
import { selectLevelUpFeat } from './level-up-modal.selector';

@Component({
  selector: 'app-level-up-modal',
  templateUrl: './level-up-modal.component.html',
  styleUrls: ['./level-up-modal.component.css']
})
export class LevelUpModalComponent {
  @Output() closeModalEvent: EventEmitter<string> = new EventEmitter<string>;

  availableModalSteps:Array<any> = [{title: 'Tool Usage', indicator: 0}, {title: 'Failures/ Absences', indicator: 1}, {title: 'Others', indicator: 2}];

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

  isStepLast(currentStep: number) {
    return currentStep === (this.availableModalSteps.length - 1);
  }

  isStepFirst(currentStep: number) {
    return currentStep === (this.availableModalSteps[0].indicator);
  }

  emitSetStudyTime() {
    let studytime = parseInt((<HTMLInputElement>document.querySelector('[id^=studytime_]:checked')).value);
    console.log(studytime);
    this.store.dispatch(setStudyTime({studytime: studytime}));
  }

  calculatePredictedLevel() {
    
  }
}
