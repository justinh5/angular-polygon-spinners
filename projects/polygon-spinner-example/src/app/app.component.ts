import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'polygon-spinner-example';

  configs1 = {
    polygons: [
      {
        sides: 6,
        size: 100,
        fill: {
          color: "#41f4ac"
        },
        stroke: {},
        spin: {}
      }
    ]
  };

  configs2 = {
    polygons: [
      {
        sides: 6,
        size: 100,
        fill: {
          color: null,
          colorChange: {
            colors: ["#41f4ac", "#f14e3b", "#3b4af0", "#da3aef", "#b5ef39", "#3951ef"]
          }
        },
        stroke: {},
        spin: {
          direction: "clockwise",
          time: "3s",
          type: "ease-in-out"
        }
      }
    ]
  };



}
