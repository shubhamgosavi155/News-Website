import { TestBed } from '@angular/core/testing';

import { NewsserviceapiService } from './newsserviceapi.service';

describe('NewsserviceapiService', () => {
  let service: NewsserviceapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsserviceapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
