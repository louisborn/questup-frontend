import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-personal-bar-chart',
  templateUrl: './student-personal-bar-chart.component.html',
  styleUrls: ['./student-personal-bar-chart.component.css']
})
export class StudentPersonalBarChartComponent {
  @Input() userPersonal: any = null;
  @Input() userInputForPersonal: any = null;

  private _personal: any;
  private _inputForPersonal: any;
  private _xBarLabels: Array<string> = ['Study time', 'Failures', 'Absences', 'Q1', 'Q2', 'Freetime', 'Go out', 'Traveltime'];
  
  public graph:any;

  ngOnInit() {
    this._personal = this.userPersonal[0];
    this._inputForPersonal = this.userInputForPersonal;
    this.initGraph();
  }

  formatGraphYData(data: any) {
    return [data.studytime, data.failures, data.absences, data.g1, data.g2, data.freetime, data.goout, data.traveltime];
  }

  initGraph() {
    this.graph = {
      data: [
        {
          x: this._xBarLabels,
          y: this.formatGraphYData(this._personal),
          name: 'Current',
          type: 'bar',
        },
        {
          x: this._xBarLabels,
          y: this.formatGraphYData(this._inputForPersonal),
          name: 'Future',
          type: 'bar',
        }
      ],
      layout: {autosize: true}
    }
  }
}
