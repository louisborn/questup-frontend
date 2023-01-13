import { TestBed } from '@angular/core/testing';

import { ServiceQuestsService } from './service-quests.service';

describe('ServiceQuestsService', () => {
  let service: ServiceQuestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceQuestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
