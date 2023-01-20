import { Component, Input } from '@angular/core';
import { ServiceShopService } from 'src/app/page-shop/service-shop.service';

export interface ShopItem {
  _id: string;
  title: string;
  usage: number;
  price: number;
  teachers_id: string;
}

export const initialState: ShopItem = {
  _id: '',
  title: '',
  usage: -1,
  price: -9999,
  teachers_id: '',
};

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
})
export class ShopItemComponent {
  @Input() item: ShopItem = initialState;
  @Input() user_point_balance: number = -9999;

  constructor(private service: ServiceShopService) {}

  canAffordShopItem(itemPrice: number) {
    return this.user_point_balance >= itemPrice;
  }

  calcUserPointBalanceAndItemPriceDiff(itemPrice: number) {
    return ((this.user_point_balance / itemPrice) * 100).toFixed(0);
  }

  buyShopItem() {
    this.service.buyShopItem(this.item._id, this.item.price);
  }
}
