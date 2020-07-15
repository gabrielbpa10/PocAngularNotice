import { TestBed } from '@angular/core/testing';

import { ApiPatronagesService } from './api-patronages.service';

describe('ApiPatronagesService', () => {
  let service: ApiPatronagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPatronagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
