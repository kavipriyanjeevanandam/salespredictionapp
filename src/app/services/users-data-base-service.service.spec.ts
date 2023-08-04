import { TestBed } from '@angular/core/testing';

import { UsersDataBaseServiceService } from './users-data-base-service.service';

describe('UsersDataBaseServiceService', () => {
  let service: UsersDataBaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataBaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
