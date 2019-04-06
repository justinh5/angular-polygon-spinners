import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-custom-spinner',
  templateUrl: './custom-spinner.component.html',
  styleUrls: ['./custom-spinner.component.css']
})
export class CustomSpinnerComponent implements OnChanges {

  @Input() spinnerConfigs;
  points: string[];
  polygons: any;
  styleSheet: any;
  polyCounter: number;


  constructor() {
    this.points = ['50,28.6 68.6,60.8 31.4,60.8', '31,31 68,31 68,68 31,68', '50,25.2 73.9,42.6 64.8,70.8 35.2,70.8 26.1,42.6', '50,24.2 71.9,36.8 71.9,62 50,74.7 28.1,62 28.1,36.8', '50,25.2 69.7,34.7 74.6,56 61,73.2 39,73.2 25.4,56 30.3,34.7', '50,23.6 68.6,31.4 76.4,50 68.6,68.6 50,76.4 31.4,68.6 23.6,50 31.4,31.4', '50,24 66.6,30 75.4,45.3 72.4,62.7 58.8,74 41.2,74 27.6,62.7 24.6,45.3 33.4,30', '50,23.6 65.5,28.7 75.1,41.9 75.1,58.1 65.5,71.3 50,76.4 34.5,71.3 24.9,58.1 24.9,41.9 34.5,28.7'];
    this.polygons = [];
    this.polyCounter = 0;
    let style = document.createElement('style');
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    this.styleSheet = style.sheet;
  }

  ngOnChanges() {
    this.polygons = [];
    this.spinnerConfigs.polygons.forEach(p => {
      ++this.polyCounter;
      p.points = (p.sides > 2 && p.sides < 11) ? this.points[p.sides-3] : 3;
      p.size = p.size + '%';
      p.animations = this.setAnimations(p).join(',');
      this.polygons.push(p);
    });
  }

  setAnimations(p: any): string[] {

    let animations = [];

    // spin Animation
    if(p.spin && p.spin.direction) {
      animations.push(this.spin(p));
    }

    // color change animations
    if(p.stroke.colorChange && p.stroke.colorChange.colors) {
      animations.push(this.strokeColorChange(p));
    }
    if(p.fill.colorChange && p.fill.colorChange.colors) {
      animations.push(this.fillColorChange(p));
    }

    // stroke animations
    if(p.stroke.dash && p.stroke.dash.direction) {
      animations.push(this.dash(p));
    }
    if(p.stroke.widthChange && p.stroke.widthChange.widths) {
      animations.push(this.strokeWidth(p));
    }

    return animations;
  }

  spin(p: any): string {
    let time = p.spin.time ? p.spin.time : '3s';
    let type = p.spin.type ? p.spin.type : 'linear';
    if(p.spin.direction === 'clockwise') {
      return `spin-clockwise ${time} ${type} infinite`;
    }
    return `spin-counter-clockwise ${time} ${type} infinite`;
  }

  strokeColorChange(p: any): string {
    let length = p.stroke.colorChange.colors.length;
    let time = p.stroke.colorChange.time ? p.stroke.colorChange.time : '3s';

    let frames = `0%, 100% { stroke: ${p.stroke.colorChange.colors[0]}; }`;
    let increment = Math.floor(100 / length);
    let percentCounter = increment;
    for(let i=1; i<length; ++i) {
      frames += `${percentCounter}% { stroke: ${p.stroke.colorChange.colors[i]}; }`;
      percentCounter += increment;
    }

    let aName = `stroke-color-change-${this.polyCounter}`;
    let rule = `@keyframes ${aName} { ${frames} }`;
    this.styleSheet.insertRule(rule, this.styleSheet.length);

    return `${aName} ${time} linear infinite`;
  }

  fillColorChange(p: any): string {
    let length = p.fill.colorChange.colors.length;
    let time = p.fill.colorChange.time ? p.fill.colorChange.time : '3s';

    let frames = `0%, 100% { fill: ${p.fill.colorChange.colors[0]}; }`;
    let increment = Math.floor(100 / length);
    let percentCounter = increment;
    for(let i=1; i<length; ++i) {
      frames += `${percentCounter}% { fill: ${p.fill.colorChange.colors[i]}; }`;
      percentCounter += increment;
    }

    let aName = `fill-color-change-${this.polyCounter}`;
    let rule = `@keyframes ${aName} { ${frames} }`;
    this.styleSheet.insertRule(rule, this.styleSheet.length);

    return `${aName} ${time} linear infinite`;
  }

  dash(p: any): string {
    let type = p.stroke.dash.type ? p.stroke.dash.type : 'linear';
    let time = p.stroke.dash.time ? p.stroke.dash.time : '5s';
    let direction = p.stroke.dash.direction === 'clockwise' ? '-' : '';
    let frames = `to { stroke-dashoffset: ${direction}${p.stroke.dash.dashOffset} }`;

    let aName = `dash-${this.polyCounter}`;
    let rule = `@keyframes ${aName} { ${frames} }`;
    this.styleSheet.insertRule(rule, this.styleSheet.length);

    return `${aName} ${time} ${type} infinite`;
  }

  strokeWidth(p: any): string {
    let length = p.stroke.widthChange.widths.length;
    let time = p.stroke.widthChange.time ? p.stroke.widthChange.time : '3s';

    let frames = `0%, 100% { stroke-width: ${p.stroke.widthChange.widths[0]}; }`;
    let increment = Math.floor(100 / length);
    let percentCounter = increment;
    for(let i=1; i<length; ++i) {
      frames += `${percentCounter}% { stroke-width: ${p.stroke.widthChange.widths[i]}; }`;
      percentCounter += increment;
    }

    let aName = `stroke-width-change-${this.polyCounter}`;
    let rule = `@keyframes ${aName} { ${frames} }`;
    this.styleSheet.insertRule(rule, this.styleSheet.length);

    return `${aName} ${time} linear infinite`;
  }

}
