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
        strokeLinecap: "butt",
        fill: {
          color: null,
          colorChange: {
            colors: ["violet", "red", "white"],
            time: "1s"
          }
        },
        stroke: {
          color: null,
          width: "8",
          colorChange: {
            colors: ["cyan", "yellow", "magenta"],
            time: "5s"
          },
          dash: {
            dashArray: 10,
            dashOffset: 500,
            direction: "clockwise",
            type: "linear",
            time: "20s"
          }
        },
        spin: {
          direction: "clockwise",
          duration: "2s",
          type: "ease-in-out"
        }
      },
      {
        sides: 3,
        size: 60,
        strokeLinecap: "butt",
        fill: {
          color: null,
          colorChange: {
            colors: ["orange", "purple", "black"],
            time: "5s"
          }
        },
        stroke: {
          color: null,
          width: "8",
          colorChange: {
            colors: ["green", "pink", "blue"],
            time: "5s"
          },
        },
        spin: {
          direction: "counter-clockwise",
          duration: "1s",
          type: "ease-in-out"
        }
      }
    ]
  };



}
