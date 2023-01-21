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
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

import * as fromQuests from '../app/page-quests/page-quests.reducer';
import * as fromShop from '../app/page-shop/page-shop.reducer';
import * as fromScores from '../app/page-scores/page-scores.reducer';
import * as fromLevelUpFeat from '../app/components/level-up-modal/level-up-modal.reducer';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component'; 
import { CommonModule } from '@angular/common';
import { StudentActivityHeatMapComponent } from './components/student-activity-heat-map/student-activity-heat-map.component';
import { LevelUpModalComponent } from './components/level-up-modal/level-up-modal.component';

PlotlyModule.plotlyjs = PlotlyJS;

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
    SimpleModalComponent,
    StudentActivityHeatMapComponent,
    LevelUpModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    PlotlyModule,
    StoreModule.forRoot(
      {
        questsRootState: fromQuests.questsReducer,
        shopRootState: fromShop.shopReducer,
        scoresRootState: fromScores.scoreReducer,
        levelUpRootState: fromLevelUpFeat.levelUpFeatReducer,
      },
      {}
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
