import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveSpinnerComponent } from './five-spinner.component';

describe('FiveSpinnerComponent', () => {
  let component: FiveSpinnerComponent;
  let fixture: ComponentFixture<FiveSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
