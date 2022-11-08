import { TestBed } from '@angular/core/testing';

import { ApiDataCollectionService } from './api-data-collection.service';

describe('ApiDataCollectionService', () => {
  let service: ApiDataCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDataCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
