import { TestBed } from '@angular/core/testing';

import { LoandetailsService } from './loandetails.service';

describe('LoandetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoandetailsService = TestBed.get(LoandetailsService);
    expect(service).toBeTruthy();
  });
});
