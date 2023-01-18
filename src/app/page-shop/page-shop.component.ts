import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceShopService } from './service-shop.service';
import * as fromShop from '../page-shop/page-shop.reducer';
import { Store } from '@ngrx/store';
import { selectShop } from './page-shop.selector';

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
    
  }
}
