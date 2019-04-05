import { Component } from '@angular/core';

@Component({
  selector: 'app-four-spinner',
  templateUrl: './four-spinner.component.html',
  styleUrls: ['./four-spinner.component.css']
})
export class FourSpinnerComponent {

  points: string;

  constructor() {
    this.points = '31,31 68,31 68,68 31,68';
  }

}
