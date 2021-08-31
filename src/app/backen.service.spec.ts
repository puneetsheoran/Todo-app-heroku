import { TestBed } from '@angular/core/testing';

import { BackenService } from './backen.service';

describe('BackenService', () => {
  let service: BackenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
