import { TestBed } from '@angular/core/testing';

import { WriteFileService } from './write-file.service';

describe('WriteFileService', () => {
  let service: WriteFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriteFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
