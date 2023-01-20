import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageQuestsComponent } from './page-quests/page-quests.component';
import { PageShopComponent } from './page-shop/page-shop.component';
import { PageScoresComponent } from './page-scores/page-scores.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { QuestsModal } from './components/quests-modal/quests-modal.component';
import { MedalCardComponent } from './components/medal-card/medal-card.component';
import { QuestsComponent } from './components/quests/quests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoaderComponent } from './components/loader/loader.component';

import * as fromQuests from '../app/page-quests/page-quests.reducer';
import * as fromShop from '../app/page-shop/page-shop.reducer';
import * as fromScores from '../app/page-scores/page-scores.reducer';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PageQuestsComponent,
    PageShopComponent,
    PageScoresComponent,
    QuestsModal,
    MedalCardComponent,
    QuestsComponent,
    LoaderComponent,
    ShopItemComponent,
    SimpleModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    StoreModule.forRoot(
      {
        questsRootState: fromQuests.questsReducer,
        shopRootState: fromShop.shopReducer,
        scoresRootState: fromScores.scoreReducer,
      },
      {}
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
