import { createAction, props } from '@ngrx/store';

export const fillShopPageData = createAction(
  '[Shop] Fill Shop Page Data',
  props<{
    shop_items: Array<any>;
    user_point_balance: number;
    has_today_been_redeemed: boolean;
  }>()
);

export const showDailyChestWin = createAction(
  '[Shop] Daily Chest Collected',
  props<{daily_chest_win: number}>()
);

export const toggleLoading = createAction(
  '[Shop] Toggle Loading',
);

export const toggleButtonLoading = createAction(
  '[Shop] Toggle Button Loading',
);
