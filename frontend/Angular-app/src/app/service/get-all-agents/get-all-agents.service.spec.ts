import { TestBed } from '@angular/core/testing';

import { GetAllAgentsService } from './get-all-agents.service';

describe('GetAllAgentsService', () => {
  let service: GetAllAgentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllAgentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
