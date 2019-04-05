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
        size: 100,
        fill: {
          color: null,
          colorChange: {
            colors: ["cyan", "magenta", "yellow"],
            time: "8s"
          }
        },
        stroke: {
          color: null,
          width: null,
          widthChange: {
            widths: [10, 0],
            time: "3s"
          },
          colorChange: {
            colors: ["magenta", "yellow", "cyan"],
            time: "8s"
          }
        },
        spin: {
          direction: "clockwise",
          time: "2s",
          type: "linear"
        }
      },
      {
        sides: 3,
        size: 70,
        fill: {
          color: null,
          colorChange: {
            colors: ["yellow", "cyan", "magenta"],
            time: "8s"
          }
        },
        stroke: {
          color: null,
          width: null,
          widthChange: {
            widths: [0, 10],
            time: "3s"
          },
          colorChange: {
            colors: ["magenta", "yellow", "cyan"],
            time: "8s"
          }
        },
        spin: {
          direction: "counter-clockwise",
          time: "2s",
          type: "linear"
        }
      },
      {
        sides: 3,
        size: 40,
        fill: {
          color: null,
          colorChange: {
            colors: ["magenta", "yellow", "cyan"],
            time: "8s"
          }
        },
        stroke: {
          color: null,
          width: null,
          widthChange: {
            widths: [10, 5],
            time: "3s"
          },
          colorChange: {
            colors: ["yellow", "cyan", "magenta"],
            time: "8s"
          }
        },
        spin: {
          direction: "clockwise",
          time: "2s",
          type: "linear"
        }
      }
    ]
  };



}
