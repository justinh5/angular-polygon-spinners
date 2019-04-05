# Angular Polygon Spinners

A spinner animation library for Angular 7.

Intended for experimentation and not for production.

## Intallation

`npm install --save polygon-spinner`

OR

`yarn install polygon-spinner`

## Usage

If a jkfjldjgkf.

## Components

Each component fills the height and width of its parent container.

#### Customizable spinner

```
  <ngx-custom-spinner [configs]="configs"></ngx-custom-spinner>
```
Configs are set in the parent component's TypeScript file, where each layered polygon is defined. Most options resemble familiar CSS properties.

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

#### Default Spinners

Listed are default, non-configurable spinners:

```
  <ngx-three-spinner></ngx-three-spinner>

  <ngx-four-spinner></ngx-four-spinner>

  <ngx-five-spinner></ngx-five-spinner>

  <ngx-six-spinner></ngx-six-spinner>

  <ngx-seven-spinner></ngx-seven-spinner>

  <ngx-eight-spinner></ngx-eight-spinner>

  <ngx-nine-spinner></ngx-nine-spinner>

  <ngx-ten-spinner></ngx-ten-spinner>
```

## Author

  Justin Haupt

  To contribute

## License

This project is licensed under the MIT License.
