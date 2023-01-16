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
import * as fromQuests from '../app/page-quests/page-quests.reducer';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component';
import { MedalCardComponent } from './components/medal-card/medal-card.component';
import { QuestsComponent } from './components/quests/quests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    PageQuestsComponent,
    PageShopComponent,
    PageScoresComponent,
    SimpleModalComponent,
    MedalCardComponent,
    QuestsComponent,
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
      },
      {}
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
