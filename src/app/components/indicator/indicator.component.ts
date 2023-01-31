import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent {
  @Input() data: any = null;
  @Input() referenceData: any = null;
  @Input() visTitle: any = null;
  @Input() text: any = null;
  @Input() colorSchemeReversed: boolean = false;

  private _data: any;
  private _referenceData: any;
  private _visTitle: any;
  private _text: any;
  private _colorSchemeReversed: any;
  
  public graph:any;

  ngOnInit() {
    this._data = this.data;
    this._referenceData = this.referenceData;
    this._visTitle = this.visTitle;
    this._text = this.text;
    this._colorSchemeReversed = this.colorSchemeReversed;
    this.initGraph();
  }

  initGraph() {
    this.graph = {
      data: [
        {
          type: "indicator",
          mode: "number+gauge+delta",
          gauge: { shape: "bullet" },
          delta: { reference: this._referenceData, decreasing: {color: this._colorSchemeReversed ? '#3D9970' : '#FF4136'}, increasing: {color: this._colorSchemeReversed ? '#FF4136' : '#3D9970'} },
          value: this._data,
          domain: { x: [0, 1], y: [0, 1] },
          title: { text: this._text, font: {size: 14} }
        }
      ],
      layout: {width: 500, height: 250, title: this._visTitle}
    }
  }
}
