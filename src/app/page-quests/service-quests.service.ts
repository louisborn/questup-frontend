import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import {
  addQuestToCompleted,
  fillQuestsPageData,
  toggleLoading,
} from './page-quests.actions';
import { environment } from 'src/environments/environment';
import { forkJoin, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceQuestsService {
  httpGetQuests = this.http.get(
    `${environment.base}teachers/${environment.teacherId}/subjects/${environment.subjectId}/quests`
  );

  httpGetAnnualRewards = this.http.get(
    `${environment.base}annual-rewards/${environment.teacherId}`
  );

  httpGetStudentCompletedQuests = this.http.get(
    `${environment.base}students/${environment.studentId}/completed-quests`
  );

  constructor(private store: Store, private http: HttpClient) {}

  fetchQuests() {
    this.store.dispatch(toggleLoading());
    forkJoin([
      this.httpGetQuests,
      this.httpGetAnnualRewards,
      this.httpGetStudentCompletedQuests,
    ]).subscribe({
      next: (data: any) => {
        this.store.dispatch(
          fillQuestsPageData({
            quests: data[0],
            annual_rewards: data[1][0].rewards,
            student_completed_quests: data[2],
          })
        );
      },
      error: (error: any) => {},
      complete: () => {
        this.store.dispatch(toggleLoading());
      },
    });
  }

  saveQuestToCompleted(results: Array<any>, questId: string, pointsEarned: number) {
    let httpPostCompletedQuest = this.http.post<any>(
      `${environment.base}${environment.studentId}/quests/${questId}/submit`,
      { quest: { results: results } }
    );
    let httpPostStudentsPointBalance = this.http.post<any>(
      `${environment.base}${environment.studentId}/scores/point-balance/update`,
      { points: pointsEarned }
    );
    let result = new Subject<string>();
    this.store.dispatch(toggleLoading());
    forkJoin({
      addQuestToCompleted: httpPostCompletedQuest,
      updateStudentPointsBalance: httpPostStudentsPointBalance,
    }).subscribe({
      next: (data: any) => {
        this.store.dispatch(
          addQuestToCompleted({ quest_id: data.addQuestToCompleted.inserted_id })
        );
        result.next('Okay');
      },
      error: (error: any) => {
        result.next('Error');
      },
      complete: () => {
        this.store.dispatch(toggleLoading());
      },
    });
    return result.asObservable();
  }
}
