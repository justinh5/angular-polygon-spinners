import { Component } from '@angular/core';

@Component({
  selector: 'ngx-ten-spinner',
  templateUrl: './ten-spinner.component.html',
  styleUrls: ['./ten-spinner.component.css']
})
export class TenSpinnerComponent {

  readonly points = '50,23.6 65.5,28.7 75.1,41.9 75.1,58.1 65.5,71.3 50,76.4 34.5,71.3 24.9,58.1 24.9,41.9 34.5,28.7';

  constructor() { }

}
