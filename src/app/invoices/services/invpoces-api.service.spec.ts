import { TestBed } from '@angular/core/testing';

import { InvpocesApiService } from './invpoces-api.service';

describe('InvpocesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvpocesApiService = TestBed.get(InvpocesApiService);
    expect(service).toBeTruthy();
  });
});
