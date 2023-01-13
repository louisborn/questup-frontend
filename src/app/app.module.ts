import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageQuestsComponent } from './page-quests/page-quests.component';
import { PageShopComponent } from './page-shop/page-shop.component';
import { PageScoresComponent } from './page-scores/page-scores.component';
import { StoreModule } from '@ngrx/store';

import * as fromQuests from '../app/page-quests/page-quests.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PageQuestsComponent,
    PageShopComponent,
    PageScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      questsRootState: fromQuests.questsReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
