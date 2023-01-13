import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuestsState } from './page-quests.reducer';
import { selectQuests } from './page-quests.selector';
import { ServiceQuestsService } from './service-quests.service';

@Component({
  selector: 'app-page-quests',
  templateUrl: './page-quests.component.html',
  styleUrls: ['./page-quests.component.css']
})
export class PageQuestsComponent implements OnInit {

  quests$: Observable<QuestsState>;

  constructor(private store: Store<QuestsState>, private service: ServiceQuestsService) { 
    this.quests$ = this.store.select(selectQuests);
  }

  ngOnInit(): void {
    this.service.testService();
  }

}
