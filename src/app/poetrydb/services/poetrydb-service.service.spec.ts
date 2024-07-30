import { TestBed } from '@angular/core/testing';

import { PoetrydbServiceService } from './poetrydb-service.service';

describe('PoetrydbServiceService', () => {
  let service: PoetrydbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoetrydbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
