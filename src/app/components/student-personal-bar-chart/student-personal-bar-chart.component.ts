import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-personal-bar-chart',
  templateUrl: './student-personal-bar-chart.component.html',
  styleUrls: ['./student-personal-bar-chart.component.css']
})
export class StudentPersonalBarChartComponent {
  @Input() userPersonal: any = null;
  @Input() userInputForPersonal: any = null;
  @Input() xBarLabels: any = null;
  @Input() visTitle: any = null;
  @Input() yAxisTitle: any = null;

  private _personal: any;
  private _inputForPersonal: any;
  private _xBarLabels: any;
  private _visTitle: any;
  private _yAxisTitle: any;
  
  public graph:any;

  ngOnInit() {
    this._personal = this.userPersonal;
    this._inputForPersonal = this.userInputForPersonal;
    this._xBarLabels = this.xBarLabels;
    this._visTitle = this.visTitle;
    this._yAxisTitle = this.yAxisTitle;
    this.initGraph();
  }

  initGraph() {
    this.graph = {
      data: [
        {
          x: this._xBarLabels,
          y: this._inputForPersonal,
          name: 'Current',
          type: 'bar',
        },
        {
          x: this._xBarLabels,
          y: this._personal,
          name: 'Future',
          type: 'bar',
        }
      ],
      layout: {width: 350, height: 350, title: this._visTitle, yaxis: {title: this._yAxisTitle}}
    }
  }
}
