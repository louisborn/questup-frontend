import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import * as ShopActions from '../page-shop/page-shop.actions';

export const shopFeatureKey = 'shopRootState';

export interface ShopState {
  shop_items: Array<any>;
  user_point_balance: number;
  has_today_been_redeemed: boolean;
  bought_items: Array<string>;
  show_daily_chest_win: boolean;
  show_bought_item: boolean;
  daily_chest_win: number;
  loading: boolean;
  button_loading: boolean;
}

export const initialState: ShopState = {
  shop_items: [],
  user_point_balance: -9999,
  has_today_been_redeemed: true,
  bought_items: [],
  show_daily_chest_win: false,
  show_bought_item: false,
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
      { shop_items, user_point_balance, has_today_been_redeemed, bought_items }
    ) => ({
      ...state,
      shop_items: shop_items,
      user_point_balance: user_point_balance,
      has_today_been_redeemed: has_today_been_redeemed,
      bought_items: bought_items,
    })
  ),
  on(ShopActions.buyShopItem, (state: ShopState, {item_id, item_price}) => ({
    ...state,
    bought_items: [...state.bought_items, item_id],
    user_point_balance: calcNewBalance(state.user_point_balance, item_price),
  })),
  on(ShopActions.showDailyChestWin, (state: ShopState, {daily_chest_win}) => ({
    ...state,
    daily_chest_win: daily_chest_win,
    show_daily_chest_win: true,
    user_point_balance: calcNewBalance(state.user_point_balance, (daily_chest_win * (-1)))
  })),
  on(ShopActions.closeDailyChestWin, (state: ShopState, {}) => ({
    ...state,
    show_daily_chest_win: false,
    has_today_been_redeemed: true,
  })),
  on(ShopActions.toggleLoading, (state: ShopState, {}) => ({
    ...state,
    loading: !state.loading,
  })),
  on(ShopActions.toggleButtonLoading, (state: ShopState, {}) => ({
    ...state,
    button_loading: !state.button_loading,
  })),
  on(ShopActions.toggleShowBoughtItem, (state: ShopState, {}) => ({
    ...state,
    show_bought_item: !state.show_bought_item,
  })),
);

function calcNewBalance(current: number, toSubstract: number) {
  return current - toSubstract;
}
