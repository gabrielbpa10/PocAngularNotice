import { TestBed } from '@angular/core/testing';

import { ApiTeamsDetailsService } from './api-teams-details.service';

describe('ApiTeamsDetailsService', () => {
  let service: ApiTeamsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTeamsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
