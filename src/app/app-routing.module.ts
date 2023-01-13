import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageQuestsComponent } from './page-quests/page-quests.component';
import { PageScoresComponent } from './page-scores/page-scores.component';
import { PageShopComponent } from './page-shop/page-shop.component';

const routes: Routes = [
  {path: 'quests', component: PageQuestsComponent},
  {path: 'scores', component: PageScoresComponent},
  {path: 'shop', component: PageShopComponent},
  {path: '', redirectTo: '/quests', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
