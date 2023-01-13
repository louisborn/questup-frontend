import { TestBed } from '@angular/core/testing';

import { ServiceShopService } from './service-shop.service';

describe('ServiceShopService', () => {
  let service: ServiceShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
