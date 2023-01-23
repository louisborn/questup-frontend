import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-activity-heat-map',
  templateUrl: './student-activity-heat-map.component.html',
  styleUrls: ['./student-activity-heat-map.component.css']
})
export class StudentActivityHeatMapComponent {
  @Input() userActivity: any = null;

  private _activityLog: any;
  private _countedActivities: number = 0;
  graph: any;

  private colorscaleValue = [
    [0, '#f5f5f5'],
    [1, '#22c55e'],
  ];

  constructor() {}

  ngOnInit() {
    this._activityLog = this.userActivity;
    this.countActivities();
    this.initGraph();
  }

  set countedActivities(count: number) {
    this._countedActivities = count;
  }

  get countedActivities() {
    return this._countedActivities;
  }

  get logZ() {
    return this._activityLog.z;
  }

  get logX() {
    return this._activityLog.x;
  }

  get logY() {
    return this._activityLog.y;
  }

  initGraph() {
    this.graph = {
      data: [
        {
          z: this.logZ,
          x: this.logX,
          y: this.logY,
          type: 'heatmap',
          hoverongaps: false,
          colorscale: this.colorscaleValue,
        }
      ],
      layout: {autosize: true}
    };
  }

  countActivities() {
    let count = 0;
    for (let arr of this.logZ) {
      for (let activity of arr){
        if (activity != null && activity > 0) {
          count++;
        }
      }
    }
    this.countedActivities = count;
  }
}
