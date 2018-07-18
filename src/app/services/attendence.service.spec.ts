import { TestBed, inject } from '@angular/core/testing';

import { AttendenceService } from './attendence.service';

describe('AttendenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendenceService]
    });
  });

  it('should be created', inject([AttendenceService], (service: AttendenceService) => {
    expect(service).toBeTruthy();
  }));
});
