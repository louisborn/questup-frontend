import { TestBed } from '@angular/core/testing';

import { ServiceScoresService } from './service-scores.service';

describe('ServiceScoresService', () => {
  let service: ServiceScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
