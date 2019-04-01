import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSpinnerComponent } from './three-spinner.component';

describe('ThreeSpinnerComponent', () => {
  let component: ThreeSpinnerComponent;
  let fixture: ComponentFixture<ThreeSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
