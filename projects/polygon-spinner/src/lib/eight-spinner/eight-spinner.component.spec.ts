import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightSpinnerComponent } from './eight-spinner.component';

describe('EightSpinnerComponent', () => {
  let component: EightSpinnerComponent;
  let fixture: ComponentFixture<EightSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
