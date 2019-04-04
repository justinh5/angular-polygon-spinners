import { Component } from '@angular/core';

@Component({
  selector: 'ngx-five-spinner',
  templateUrl: './five-spinner.component.html',
  styleUrls: ['./five-spinner.component.css']
})
export class FiveSpinnerComponent {

  readonly points = '50,25.2 73.9,42.6 64.8,70.8 35.2,70.8 26.1,42.6';

  constructor() { }

}
