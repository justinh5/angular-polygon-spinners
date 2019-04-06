# Angular Polygon Spinners

[![Build Status](https://travis-ci.com/justinh5/angular-polygon-spinners.svg?branch=master)](https://travis-ci.com/justinh5/angular-polygon-spinners)
[![support](https://img.shields.io/badge/Support-Angular%206.x-brightgreen.svg)](https://angular.io/docs)
[![support](https://img.shields.io/badge/Support-Angular%207.x-brightgreen.svg)](https://angular.io/docs)
[![npm](https://img.shields.io/npm/v/angular-polygon-spinners.svg)](https://www.npmjs.com/package/angular-polygon-spinners)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

Spinner animation library for Angular 6 or 7. Demo [here](https://naughty-mclean-f78b8d.netlify.com/).

Intended for experimentation and not for production.

## Installation

`npm install --save angular-polygon-spinners`


## Usage

Import the module into your module file.

```
import { PolygonSpinnerModule } from 'angular-polygon-spinners';

  @NgModule({
    imports: [PolygonSpinnerModule]
  })
```

#### Components

Each component is 200px x 200px by default and can be scaled accordingly.

#### Customizable spinner

```
  <app-custom-spinner [spinnerConfigs]="configs"></app-custom-spinner>
```
Configs are defined in the parent component's TypeScript file.

The polygons are layered by order in the polygon array. [ (Back) , (Front) ]

A basic configuration:

```
configs = {
  polygons: [
    {
      sides: 3,
      size: 100,
      fill: {
        color: "red",
        colorChange: {}
      },
      stroke: {
        color: "blue",
        width: 8,
        strokeLinecap: "butt",
        colorChange: {},
        dash: {}
      },
      spin: {
        direction: "clockwise",
        time: "2s",
        type: "linear"
      }
    },
    {
      sides: 8,
      ...
    }
  ]
}
```

* `sides` The number of sides on the polygon (3-10)
* `size` The scaled size of the polygon (0-100)
* `fill.color` Shape fill color (color value | null)
* `stroke.color` Stroke color (color value | null)
* `stroke.width` Stroke width (width value | null)
* `stroke.strokeLinecap` [SVG strokeLinecap attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)

##### Animation Options

* `spin.direction` Rotation direction (clockwise | counter-clockwise)
* `spin.time` Duration of one 360 degree spin
* `spin.type` CSS [animation-timing-function](https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp) property

Color changes can be applied to fill and strokes:
```
colorChange: {
  colors: ["#f49e42", "red", "black"],
  time: "5s"
}
```

Dash properties can be applied to strokes:
```
dash: {
  dashArray: 10,
  dashOffset: 500,
  direction: "clockwise",
  type: "linear",
  time: "20s"
}
```

#### Preset Spinners

Listed are preset, non-configurable spinners:

```
  <app-three-spinner></app-three-spinner>

  <app-four-spinner></app-four-spinner>

  <app-five-spinner></app-five-spinner>

  <app-six-spinner></app-six-spinner>

  <app-seven-spinner></app-seven-spinner>

  <app-eight-spinner></app-eight-spinner>

  <app-nine-spinner></app-nine-spinner>

  <app-ten-spinner></app-ten-spinner>
```


## License

MIT © [Justin Haupt](mailto:jhaupt100@gmail.com)
