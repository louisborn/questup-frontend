import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import * as ShopActions from '../page-shop/page-shop.actions';

export const shopFeatureKey = 'shopRootState';

export interface ShopState {
  shop_items: Array<any>;
  user_point_balance: number;
  has_today_been_redeemed: boolean;
  show_daily_chest_win: boolean;
  daily_chest_win: number;
  loading: boolean;
  button_loading: boolean;
}

export const initialState: ShopState = {
  shop_items: [],
  user_point_balance: -9999,
  has_today_been_redeemed: true,
  show_daily_chest_win: false,
  daily_chest_win: -9999,
  loading: false,
  button_loading: false,
};

export const shopReducer = createReducer(
  initialState,
  on(
    ShopActions.fillShopPageData,
    (
      state: ShopState,
      { shop_items, user_point_balance, has_today_been_redeemed }
    ) => ({
      ...state,
      shop_items: shop_items,
      user_point_balance: user_point_balance,
      has_today_been_redeemed: has_today_been_redeemed,
    })
  ),
  on(ShopActions.showDailyChestWin, (state: ShopState, {daily_chest_win}) => ({
    ...state,
    daily_chest_win: daily_chest_win,
    show_daily_chest_win: true,
  })),
  on(ShopActions.toggleLoading, (state: ShopState, {}) => ({
    ...state,
    loading: !state.loading,
  })),
  on(ShopActions.toggleButtonLoading, (state: ShopState, {}) => ({
    ...state,
    button_loading: !state.button_loading,
  })),
);
