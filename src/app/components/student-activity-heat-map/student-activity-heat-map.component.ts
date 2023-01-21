import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-activity-heat-map',
  templateUrl: './student-activity-heat-map.component.html',
  styleUrls: ['./student-activity-heat-map.component.css']
})
export class StudentActivityHeatMapComponent {
  @Input() userActivity: any;

  private colorscaleValue = [
    [0, '#e5e7eb'],
    [1, '#22c55e'],
  ];

  private calenderWeeks = this.calcCalenderWeeks()

  public graph = {
    data: [
      {
        z: [[0,0,3,1,0],[0,0,2,1,2],[3,1,1,1,0],[1,0,1,1,0],[3,0,1,1,0]],
        x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        y: this.calenderWeeks,
        type: 'heatmap',
        hoverongaps: false,
        colorscale: this.colorscaleValue,
      }
    ],
    layout: {autosize: true}
  }

  calcCalenderWeeks() {
    let cw:Array<string> = []
    for (let i = 1; i <= 52; i++) {
      cw.push(`cw${i}`)
    }
    return cw;
  }
}
