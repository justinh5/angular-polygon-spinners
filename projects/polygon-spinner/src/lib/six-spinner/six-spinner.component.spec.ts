import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixSpinnerComponent } from './six-spinner.component';

describe('SixSpinnerComponent', () => {
  let component: SixSpinnerComponent;
  let fixture: ComponentFixture<SixSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
