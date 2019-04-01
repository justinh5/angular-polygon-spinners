import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourSpinnerComponent } from './four-spinner.component';

describe('FourSpinnerComponent', () => {
  let component: FourSpinnerComponent;
  let fixture: ComponentFixture<FourSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
