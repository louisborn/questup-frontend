import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { fillQuestsPageData } from './page-quests.actions';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceQuestsService {

  httpGetQuests = this.http.get(`${environment.base}teachers/${environment.teacherId}/subjects/${environment.subjectId}/quests`);

  httpGetAnnualRewards = this.http.get(`${environment.base}annual-rewards/${environment.teacherId}`);

  constructor(private store: Store, private http: HttpClient) {}

  fetchQuests() {
    forkJoin([this.httpGetQuests, this.httpGetAnnualRewards]).subscribe({
      next: (data:any) => {
        console.log(data[1][0].rewards);
        this.store.dispatch(fillQuestsPageData({quests: data[0], annual_rewards: data[1][0].rewards}))
      },
      error: (error:any) => {},
      complete: () => {}
    });
  }
}
