import { Component } from '@angular/core';

@Component({
  selector: 'ngx-nine-spinner',
  templateUrl: './nine-spinner.component.html',
  styleUrls: ['./nine-spinner.component.css']
})
export class NineSpinnerComponent {

  readonly points = '50,24 66.6,30 75.4,45.3 72.4,62.7 58.8,74 41.2,74 27.6,62.7 24.6,45.3 33.4,30';

  constructor() { }

}
