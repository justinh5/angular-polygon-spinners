import { Component } from '@angular/core';

@Component({
  selector: 'app-eight-spinner',
  templateUrl: './eight-spinner.component.html',
  styleUrls: ['./eight-spinner.component.css']
})
export class EightSpinnerComponent {

  points: string;

  constructor() {
    this.points = '50,23.6 68.6,31.4 76.4,50 68.6,68.6 50,76.4 31.4,68.6 23.6,50 31.4,31.4';
  }

}
