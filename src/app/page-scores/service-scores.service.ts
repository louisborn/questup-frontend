import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { fillScoresPageData, toggleLoading } from './page-scores.actions';

@Injectable({
  providedIn: 'root'
})
export class ServiceScoresService {

  httpGetScores = this.http.get(`${environment.base}student/${environment.studentId}/scores`)

  constructor(private store: Store, private http: HttpClient) { }

  fetchScores() {
    this.store.dispatch(fillScoresPageData({scores: {total_gained_points: 3000, total_quests_completed: 1, total_available_quests: 5, predicted_grade: 15}}));
    /*this.store.dispatch(toggleLoading());
    this.httpGetScores.subscribe({
      next: (data:any) => {
        this.store.dispatch(fillScoresPageData({scores: data.payload[0]}));
      },
      error: (error: any) => {},
      complete: () => {this.store.dispatch(toggleLoading());}
    });*/
  }
}
