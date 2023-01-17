import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageQuestsComponent } from './page-quests/page-quests.component';
import { PageShopComponent } from './page-shop/page-shop.component';
import { PageScoresComponent } from './page-scores/page-scores.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import * as fromQuests from '../app/page-quests/page-quests.reducer';
import { QuestsModal } from './components/quests-modal/quests-modal.component';
import { MedalCardComponent } from './components/medal-card/medal-card.component';
import { QuestsComponent } from './components/quests/quests.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PageQuestsComponent,
    PageShopComponent,
    PageScoresComponent,
    QuestsModal,
    MedalCardComponent,
    QuestsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      questsRootState: fromQuests.questsReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
