import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuestsState } from './page-quests.reducer';
import { selectQuests } from './page-quests.selector';

@Component({
  selector: 'app-page-quests',
  templateUrl: './page-quests.component.html',
  styleUrls: ['./page-quests.component.css']
})
export class PageQuestsComponent implements OnInit {

  quests$: Observable<any>;

  constructor(private store: Store<QuestsState>) { 
    this.quests$ = this.store.select(selectQuests);
  }

  ngOnInit(): void {
  }

}
