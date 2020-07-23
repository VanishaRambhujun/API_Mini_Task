import { TestBed } from '@angular/core/testing';

import { GetAllReportsByOneAgentService } from './get-all-reports-by-one-agent.service';

describe('GetAllReportsByOneAgentService', () => {
  let service: GetAllReportsByOneAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllReportsByOneAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
