import { Component } from '@angular/core';

@Component({
  selector: 'app-three-spinner',
  templateUrl: './three-spinner.component.html',
  styleUrls: ['./three-spinner.component.css']
})
export class ThreeSpinnerComponent {

  points: string;

  constructor() {
    this.points = '50,28.6 68.6,60.8 31.4,60.8';
  }

}
