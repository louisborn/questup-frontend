import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-grade-line-chart',
  templateUrl: './student-grade-line-chart.component.html',
  styleUrls: ['./student-grade-line-chart.component.css']
})
export class StudentGradeLineChartComponent {
  @Input() userGrades: Array<number> = [];

  private _grades: Array<number> = [];
  public graph:any;

  ngOnInit() {
    this._grades = this.userGrades;
    this.initGraph();
  }

  initGraph() {
    this.graph = {
      data: [
        {
          x: ['My Level', 'Future Level'],
          y: this._grades,
          type: 'line',
        }
      ],
      layout: {autosize: true}
    }
  }
}
