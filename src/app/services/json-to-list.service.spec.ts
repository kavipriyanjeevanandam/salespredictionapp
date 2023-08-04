import { TestBed } from '@angular/core/testing';

import { JsonToListService } from './json-to-list.service';

describe('JsonToListService', () => {
  let service: JsonToListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonToListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
