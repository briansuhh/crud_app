import { TestBed } from '@angular/core/testing';

import { TrackinglogService } from './trackinglog.service';

describe('TrackinglogService', () => {
  let service: TrackinglogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackinglogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
