import { Component, Input } from '@angular/core';

export interface ShopItem {
  title: string;
  usage: number;
  price: number;
}

export const initialState: ShopItem = {
  title: '',
  usage: -1,
  price: -9999,
};

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
})
export class ShopItemComponent {
  @Input() item: ShopItem = initialState;
  @Input() user_point_balance: number = -9999;

  canAffordShopItem(itemPrice: number) {
    return this.user_point_balance >= itemPrice;
  }

  calcUserPointBalanceAndItemPriceDiff(itemPrice: number) {
    return ((this.user_point_balance / itemPrice) * 100).toFixed(0);
  }
}
