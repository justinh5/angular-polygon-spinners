import { Component } from '@angular/core';

@Component({
  selector: 'ngx-four-spinner',
  templateUrl: './four-spinner.component.html',
  styleUrls: ['./four-spinner.component.css']
})
export class FourSpinnerComponent {

  readonly points = '31,31 68,31 68,68 31,68';

  constructor() { }

}
