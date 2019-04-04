import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-six-spinner',
  templateUrl: './six-spinner.component.html',
  styleUrls: ['./six-spinner.component.css']
})
export class SixSpinnerComponent implements OnInit {

  readonly points = '50,24.2 71.9,36.8 71.9,62 50,74.7 28.1,62 28.1,36.8';

  constructor() { }

  ngOnInit() {
  }

}
