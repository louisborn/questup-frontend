import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { fillPredictionResult } from '../components/level-up-modal/level-up-modal.actions';
import { fillScoresPageData, toggleLoading } from './page-scores.actions';

@Injectable({
  providedIn: 'root',
})
export class ServiceScoresService {
  httpGetScores = this.http.get(
    `${environment.base}student/${environment.studentId}/scores`
  );

  constructor(private store: Store, private http: HttpClient) {}

  fetchScores() {
    this.store.dispatch(toggleLoading());
    this.httpGetScores.subscribe({
      next: (data: any) => {
        this.store.dispatch(fillScoresPageData({ scores: data.payload[0] }));
      },
      error: (error: any) => {},
      complete: () => {
        this.store.dispatch(toggleLoading());
      },
    });
  }

  fetchPredictedLevelByUserInput(payload: any, currentPredictedGrade: number) {
    this.store.dispatch(toggleLoading());
    this.http
      .post(`${environment.base}predict/level`, {
        payload: payload,
      })
      .subscribe({
        next: (result: any) => {
          this.store.dispatch(
            fillPredictionResult({
              result: [currentPredictedGrade, result.result],
            })
          );
        },
        error: (error: any) => {},
        complete: () => {
          this.store.dispatch(toggleLoading());
        },
      });
  }
}
