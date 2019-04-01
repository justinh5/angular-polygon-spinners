import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonSpinnerComponent } from './polygon-spinner.component';

describe('PolygonSpinnerComponent', () => {
  let component: PolygonSpinnerComponent;
  let fixture: ComponentFixture<PolygonSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
