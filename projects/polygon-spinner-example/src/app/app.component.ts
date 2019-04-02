import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'polygon-spinner-example';

  configs = {
    polygons: [
      {
        sides: 3,
        fillColor: "#000000",
        strokeColor: "#000000",
        strokeWidth: "8",
        spin: {
          direction: "clockwise",
          duration: "1s",
          type: "linear"
        }
      }
    ]
  };
}
