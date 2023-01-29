import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  buyShopItem,
  fillShopPageData,
  showDailyChestWin,
  toggleButtonLoading,
  toggleLoading,
  toggleShowBoughtItem,
} from './page-shop.actions';

@Injectable({
  providedIn: 'root',
})
export class ServiceShopService {
  httpGetDailyChestWin = this.http.get(
    `${environment.base}daily-quest/win/${environment.studentId}`
  );

  httpGetShopItems = this.http.get(
    `${environment.base}shop-items/${environment.teacherId}`
  );

  httpGetUserScores = this.http.get(
    `${environment.base}student/${environment.studentId}/shop/points`
  );

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
            shop_items: data.shop_items,
            user_point_balance: data.user_scores[0].points_balance,
            has_today_been_redeemed:
              data.user_scores[0].latest_redeem_date,
            bought_items: data.user_scores[0].bought_items,
          })
        );
      },
      error: (error: any) => {},
      complete: () => {
        this.store.dispatch(toggleLoading());
      },
    });
  }

  fetchDailyChestWin() {
    this.store.dispatch(toggleButtonLoading());
    this.httpGetDailyChestWin.subscribe({
      next: (data: any) => {
        this.store.dispatch(
          showDailyChestWin({ daily_chest_win: data.win })
        );
      },
      error: (error: any) => {},
      complete: () => {
        this.store.dispatch(toggleButtonLoading());
      },
    });
  }

  buyShopItem(itemId: any, itemPrice: number) {
    this.store.dispatch(toggleLoading());
    this.http
      .post<any>(
        `${environment.base}student/${environment.studentId}/shop/buy/${itemId}`,
        {item_price: itemPrice}
      )
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.store.dispatch(buyShopItem({ item_id: itemId, item_price: itemPrice }));
          //this.store.dispatch(toggleShowBoughtItem());
        },
        error: (error: any) => {},
        complete: () => {
          this.store.dispatch(toggleLoading());
        },
      });
  }
}
