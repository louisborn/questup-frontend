import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ServiceScoresService } from 'src/app/page-scores/service-scores.service';

import * as fromLevelUpFeat from '../level-up-modal/level-up-modal.reducer';
import {
  changePage,
  fillUserPersonal,
  setFailuresAbsencesInput,
  setOthersInput,
  setToolUsageInput,
} from './level-up-modal.actions';
import { selectLevelUpFeat } from './level-up-modal.selector';

@Component({
  selector: 'app-level-up-modal',
  templateUrl: './level-up-modal.component.html',
  styleUrls: ['./level-up-modal.component.css'],
})
export class LevelUpModalComponent {
  @Input() currentGrade: number = 0;
  @Input() userPersonal: any;

  @Output() closeModalEvent: EventEmitter<string> = new EventEmitter<string>();

  availableModalSteps: Array<any> = [
    { title: 'Tool Usage', indicator: 0 },
    { title: 'Failures/ Absences', indicator: 1 },
    { title: 'Others', indicator: 2 },
  ];

  levelUpFeat$: Observable<fromLevelUpFeat.LevelUpFeatState>;
  personal$:any;
  currentPredictedGrade:any;

  constructor(private store: Store, private service: ServiceScoresService) {
    this.levelUpFeat$ = this.store.select(selectLevelUpFeat);
  }

  ngOnInit() {
    this.personal$ = this.userPersonal;
    this.currentPredictedGrade = this.currentGrade;
    this.store.dispatch(fillUserPersonal({user_personal: this.personal$}));
  }

  emitCloseModalEvent() {
    this.closeModalEvent.emit('close');
  }

  isStepLast(currentStep: number) {
    return currentStep === this.availableModalSteps.length;
  }

  isStepFirst(currentStep: number) {
    return currentStep === this.availableModalSteps[0].indicator;
  }

  convertPercentageToPortugueseSchoolGrades(percentage: number) {
    let portuguesMaxGrade = 20;
    return ((portuguesMaxGrade / 100) * percentage);
  }

  emitPrevPage(currentPage: number) {
    let newPage: number = currentPage - 1;
    this.store.dispatch(changePage({ indicator: newPage }));
  }

  emitNextPage(currentPage: number) {
    let newPage: number = currentPage + 1;
    switch (currentPage) {
      case 0:
        this.storeUserInputForToolUsage();
        break;
      case 1:
        this.storeUserInputForFailuresAbsences();
        break;
      case 2:
        this.storeUserInputForOthers();
        break;
    }
    this.store.dispatch(changePage({ indicator: newPage }));
  }

  storeUserInputForToolUsage() {
    let studytime = parseInt(
      (<HTMLInputElement>document.querySelector('[id^=studytime_]:checked'))
        .value
    );
    let g1 = this.convertPercentageToPortugueseSchoolGrades(parseInt((<HTMLInputElement>document.querySelector('#g1')).value));
    let g2 = this.convertPercentageToPortugueseSchoolGrades(parseInt((<HTMLInputElement>document.querySelector('#g2')).value));
    this.store.dispatch(
      setToolUsageInput({ studytime: studytime, g1: g1, g2: g2 })
    );
  }

  storeUserInputForFailuresAbsences() {
    let failures = parseInt(
      (<HTMLInputElement>document.querySelector('[id^=failures_]:checked'))
        .value
    );
    let absences = parseInt(
      (<HTMLInputElement>document.querySelector('#absences')).value
    );
    this.store.dispatch(
      setFailuresAbsencesInput({ failures: failures, absences: absences })
    );
  }

  storeUserInputForOthers() {
    let freetime = parseInt(
      (<HTMLInputElement>document.querySelector('[id^=freetime_]:checked'))
        .value
    );
    let goout = parseInt(
      (<HTMLInputElement>document.querySelector('[id^=goout_]:checked')).value
    );
    let traveltime = parseInt(
      (<HTMLInputElement>document.querySelector('[id^=traveltime_]:checked'))
        .value
    );
    this.store.dispatch(
      setOthersInput({
        freetime: freetime,
        goout: goout,
        traveltime: traveltime,
      })
    );
  }

  calculatePredictedLevel(userInput: any) {
    let payload = [
      userInput.studytime,
      userInput.failures,
      userInput.absences,
      userInput.g1,
      userInput.g2,
      userInput.freetime,
      userInput.goout,
      userInput.traveltime,
    ];
    this.service.fetchPredictedLevelByUserInput(payload, this.currentPredictedGrade);
  }
}
