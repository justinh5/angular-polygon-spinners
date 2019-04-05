import { Component } from '@angular/core';

@Component({
  selector: 'app-seven-spinner',
  templateUrl: './seven-spinner.component.html',
  styleUrls: ['./seven-spinner.component.css']
})
export class SevenSpinnerComponent {

  points: string;

  constructor() {
    this.points = '50,25.2 69.7,34.7 74.6,56 61,73.2 39,73.2 25.4,56 30.3,34.7';
  }

}
