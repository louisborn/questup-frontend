import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { fillShopPageData, toggleLoading } from './page-shop.actions';

@Injectable({
  providedIn: 'root',
})
export class ServiceShopService {
  httpGetDailyChestWin = this.http.get(`${environment.base}daily-quest/win/${environment.studentId}`);

  httpGetShopItems = this.http.get(`${environment.base}shop-items/${environment.teacherId}`);

  httpGetUserScores = this.http.get(`${environment.base}student/${environment.studentId}/shop/points`);

  constructor(private store: Store, private http: HttpClient) {}

  fetchShopState() {
    this.store.dispatch(toggleLoading());
    forkJoin({
      shop_items: this.httpGetShopItems,
      user_scores: this.httpGetUserScores,
    }).subscribe({
      next: (data: any) => {
        this.store.dispatch(
          fillShopPageData({
            shop_items: data.shop_items.payload[0].items,
            user_point_balance: data.user_scores.payload[0].points_balance,
            has_today_been_redeemed: data.user_scores.payload[0].latest_redeem_date,
          })
        );
      },
      error: (error:any) => {},
      complete: () => {this.store.dispatch(toggleLoading());},
    });
  }
}
