import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-setp-indicator',
  templateUrl: './setp-indicator.component.html',
  styleUrls: ['./setp-indicator.component.css']
})
export class SetpIndicatorComponent {
  @Input() steps: Array<any> = [];
  @Input() activeStep: number = -1;

  isStepCompleted(stepIndicator: number) {
    return this.activeStep > stepIndicator;
  }

  isStepActive(stepIndicator: number) {
    return stepIndicator === this.activeStep;
  }
}
