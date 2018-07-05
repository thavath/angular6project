import { TestBed, inject } from '@angular/core/testing';

import { FujiyamaService } from './fujiyama.service';

describe('FujiyamaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FujiyamaService]
    });
  });

  it('should be created', inject([FujiyamaService], (service: FujiyamaService) => {
    expect(service).toBeTruthy();
  }));
});
