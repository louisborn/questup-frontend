import { createAction, props } from '@ngrx/store';

export const fillShopPageData = createAction(
  '[Shop] Fill Shop Page Data',
  props<{
    shop_items: Array<any>;
    user_point_balance: number;
    has_today_been_redeemed: boolean;
    bought_items: Array<string>;
  }>()
);

export const buyShopItem = createAction(
  '[Shop] Buy Shop item',
  props<{item_id: string, item_price: number}>()
);


export const showDailyChestWin = createAction(
  '[Shop] Daily Chest Collected',
  props<{daily_chest_win: number}>()
);

export const closeDailyChestWin = createAction(
  '[Shop] Close Daily Chest Collected'
);

export const toggleLoading = createAction(
  '[Shop] Toggle Loading',
);

export const toggleButtonLoading = createAction(
  '[Shop] Toggle Button Loading',
);
