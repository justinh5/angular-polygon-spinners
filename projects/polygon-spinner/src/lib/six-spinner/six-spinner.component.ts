import { Component } from '@angular/core';

@Component({
  selector: 'app-six-spinner',
  templateUrl: './six-spinner.component.html',
  styleUrls: ['./six-spinner.component.css']
})
export class SixSpinnerComponent {

  points: string;

  constructor() {
    this.points = '50,24.2 71.9,36.8 71.9,62 50,74.7 28.1,62 28.1,36.8';
  }

}
