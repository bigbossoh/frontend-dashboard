import { TestBed } from '@angular/core/testing';

import { HostserviceService } from './hostservice.service';

describe('HostserviceService', () => {
  let service: HostserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
