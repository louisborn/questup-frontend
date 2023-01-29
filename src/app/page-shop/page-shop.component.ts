import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceShopService } from './service-shop.service';
import * as fromShop from '../page-shop/page-shop.reducer';
import { Store } from '@ngrx/store';
import { selectShop } from './page-shop.selector';
import { closeDailyChestWin, toggleShowBoughtItem } from './page-shop.actions';

@Component({
  selector: 'app-page-shop',
  templateUrl: './page-shop.component.html',
  styleUrls: ['./page-shop.component.css'],
})
export class PageShopComponent implements OnInit {
  shop$: Observable<fromShop.ShopState>;

  constructor(
    private service: ServiceShopService,
    private store: Store<fromShop.ShopState>
  ) {
    this.shop$ = this.store.select(selectShop);
  }

  ngOnInit(): void {
    this.service.fetchShopState();
  }

  getDailyChestWin() {
    this.service.fetchDailyChestWin();
  }

  proceedDailyChestModalEvent(value: string) {
    if(value=='close') {
      this.store.dispatch(closeDailyChestWin());
    }
  }

  proceedBoughtItemModalEvent(value: string) {
    if(value=='close') {
      this.store.dispatch(toggleShowBoughtItem());
    }
  }

  getBougthItems(shopItems: Array<string>, boughtItems: Array<string>) {
    let result:any = [];
    boughtItems.forEach((id:any) => {
      let itemIsInUserPossession = shopItems.find((item:any) => item._id == id);
      result.push(itemIsInUserPossession);
    });
    return result;
  }
}
