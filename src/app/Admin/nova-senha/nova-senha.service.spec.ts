import { TestBed, inject } from '@angular/core/testing';

import { NovaSenhaService } from './nova-senha.service';

describe('NovaSenhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovaSenhaService]
    });
  });

  it('should be created', inject([NovaSenhaService], (service: NovaSenhaService) => {
    expect(service).toBeTruthy();
  }));
});
