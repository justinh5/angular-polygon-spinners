import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'polygon-spinner-example';

  configs = {
    polygons: [
      {
        sides: 3,
        size: 100,
        fillColor: {
          color: "#000000"
        },
        strokeColor: {
          color: ["cyan", "yellow", "magenta"],
          time: "5s"
        },
        strokeWidth: "8",
        spin: {
          direction: "clockwise",
          duration: "1s",
          type: "ease-in-out"
        }
      },
      {
        sides: 3,
        size: 60,
        fillColor: {
          color: ["orange", "purple", "black"],
          time: "5s"
        },
        strokeColor: {
          color: "red"
        },
        strokeWidth: "8",
        spin: {
          direction: "counter-clockwise",
          duration: "1s",
          type: "ease-in-out"
        }
      }
    ]
  };
}
