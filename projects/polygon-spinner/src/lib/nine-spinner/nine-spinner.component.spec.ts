import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineSpinnerComponent } from './nine-spinner.component';

describe('NineSpinnerComponent', () => {
  let component: NineSpinnerComponent;
  let fixture: ComponentFixture<NineSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
