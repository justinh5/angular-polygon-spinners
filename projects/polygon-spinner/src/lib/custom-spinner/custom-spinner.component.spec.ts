import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSpinnerComponent } from './custom-spinner.component';

describe('CustomSpinnerComponent', () => {
  let component: CustomSpinnerComponent;
  let fixture: ComponentFixture<CustomSpinnerComponent>;

  let dummyConfigs = {
    polygons: [
      {
        sides: 3,
        size: 100,
        fill: {
          color: null,
          colorChange: {
            colors: ["red", "yellow", "blue"],
            time: "5s"
          }
        },
        stroke: {
          color: null,
          width: null,
          strokeLinecap: "butt",
          widthChange: {
            widths: [1, 2, 3],
            time: "6s"
          },
          colorChange: {
            colors: ["red", "yellow", "blue"],
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
          direction: "counter-clockwise",
          time: "2s",
          type: "linear"
        }
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSpinnerComponent);
    component = fixture.componentInstance;
    component.polyCounter = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('returns correct points for a polygon', () => {
    let stringValue = component.definePoints(dummyConfigs.polygons[0]);
    expect(stringValue).toEqual('50,28.6 68.6,60.8 31.4,60.8');
  });

  it('returns expected spin animation property', () => {
    let stringValue = component.spin(dummyConfigs.polygons[0]);
    expect(stringValue).toEqual('spin-counter-clockwise 2s linear infinite');
  });

  it('returns expected stroke color change animation property', () => {
    let stringValue = component.strokeColorChange(dummyConfigs.polygons[0]);
    expect(stringValue).toEqual('stroke-color-change-1 5s linear infinite');
  });

  it('returns expected fill color change animation property', () => {
    let stringValue = component.fillColorChange(dummyConfigs.polygons[0]);
    expect(stringValue).toEqual('fill-color-change-1 5s linear infinite');
  });

  it('returns expected dash animation property', () => {
    let stringValue = component.dash(dummyConfigs.polygons[0]);
    expect(stringValue).toEqual('dash-1 20s linear infinite');
  });

  it('returns expected stroke width animation property', () => {
    let stringValue = component.strokeWidth(dummyConfigs.polygons[0]);
    expect(stringValue).toEqual('stroke-width-change-1 6s linear infinite');
  });

});
