import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenSpinnerComponent } from './seven-spinner.component';

describe('SevenSpinnerComponent', () => {
  let component: SevenSpinnerComponent;
  let fixture: ComponentFixture<SevenSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
