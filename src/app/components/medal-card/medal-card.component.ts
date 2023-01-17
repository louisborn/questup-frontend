import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medal-card',
  templateUrl: './medal-card.component.html',
  styleUrls: ['./medal-card.component.css'],
})
export class MedalCardComponent {
  @Input() medalImageSource = '';
  @Input() medalType = '';
  @Input() medalReward = '';
  @Input() medalTaskToEarnReward = '';
}
