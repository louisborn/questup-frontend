import { createReducer, on } from '@ngrx/store';
import * as ShopActions from '../page-shop/page-shop.actions';

export const shopFeatureKey = 'shopRootState';

export interface ShopState {
  shop_items: Array<any>;
  user_point_balance: number;
  has_today_been_redeemed: boolean;
  loading: boolean;
}

export const initialState: ShopState = {
  shop_items: [],
  user_point_balance: -9999,
  has_today_been_redeemed: true,
  loading: false,
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
  on(ShopActions.toggleLoading, (state: ShopState, {}) => ({
    ...state,
    loading: !state.loading,
  }))
);
