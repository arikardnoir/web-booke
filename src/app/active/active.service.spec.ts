import { TestBed, inject } from '@angular/core/testing';

import { Active\activeService } from './active\active.service';

describe('Active\activeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Active\activeService]
    });
  });

  it('should be created', inject([Active\activeService], (service: Active\activeService) => {
    expect(service).toBeTruthy();
  }));
});
