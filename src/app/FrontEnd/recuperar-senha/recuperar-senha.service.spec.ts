import { TestBed, inject } from '@angular/core/testing';

import { RecuperarSenhaService } from './recuperar-senha.service';

describe('RecuperarSenhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecuperarSenhaService]
    });
  });

  it('should be created', inject([RecuperarSenhaService], (service: RecuperarSenhaService) => {
    expect(service).toBeTruthy();
  }));
});
