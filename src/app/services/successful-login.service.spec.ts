import { TestBed } from '@angular/core/testing';

import { SuccessfulLoginService } from './successful-login.service';

describe('SuccessfulLoginService', () => {
  let service: SuccessfulLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessfulLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
