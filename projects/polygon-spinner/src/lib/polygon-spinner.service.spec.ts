import { TestBed } from '@angular/core/testing';

import { PolygonSpinnerService } from './polygon-spinner.service';

describe('PolygonSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolygonSpinnerService = TestBed.get(PolygonSpinnerService);
    expect(service).toBeTruthy();
  });
});
