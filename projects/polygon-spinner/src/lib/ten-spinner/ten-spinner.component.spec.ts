import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenSpinnerComponent } from './ten-spinner.component';

describe('TenSpinnerComponent', () => {
  let component: TenSpinnerComponent;
  let fixture: ComponentFixture<TenSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
