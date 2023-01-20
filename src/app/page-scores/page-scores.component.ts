import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectQuests } from './page-scores.selector';
import { ServiceScoresService } from './service-scores.service';

@Component({
  selector: 'app-page-scores',
  templateUrl: './page-scores.component.html',
  styleUrls: ['./page-scores.component.css'],
})
export class PageScoresComponent implements OnInit {
  scores$: Observable<any>;

  constructor(private store: Store, private service: ServiceScoresService) {
    this.scores$ = this.store.select(selectQuests);
  }

  ngOnInit(): void {
    this.service.fetchScores();
  }

  calcUserCompletedQuestsAndTotalQuestsDiff(
    userCompletedQuests: number,
    totalAvailableQuests: number
  ) {
    return ((userCompletedQuests / totalAvailableQuests) * 100).toFixed(0);
  }

  calcMedalPercentageProgress(
    userCompletedQuests: number,
    totalAvailableQuests: number,
    amountToCompleteInPercentage: number
  ) {
    let questsToCompleteForMedal: number =
      (totalAvailableQuests / 100) * amountToCompleteInPercentage;
    return ((userCompletedQuests / questsToCompleteForMedal) * 100).toFixed(0);
  }
}
