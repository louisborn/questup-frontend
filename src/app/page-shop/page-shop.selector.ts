import { state } from '@angular/animations';
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
        bought_items: shop.bought_items,
        daily_chest_win: shop.daily_chest_win,
        show_daily_chest_win: shop.show_daily_chest_win,
        show_bought_item: shop.show_bought_item,
        loading: shop.loading,
        button_loading: shop.button_loading,
    })
);
