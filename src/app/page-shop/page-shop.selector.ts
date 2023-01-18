import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromShop from '../page-shop/page-shop.reducer';

export const selectShopState = createFeatureSelector<fromShop.ShopState>(
  fromShop.shopFeatureKey
);

export const selectShop = createSelector(
    selectShopState,
    (shop: fromShop.ShopState) => ({
        shop_items: shop.shop_items,
        user_point_balance: shop.user_point_balance,
        has_today_been_redeemed: shop.has_today_been_redeemed,
        loading: shop.loading,
    })
);
