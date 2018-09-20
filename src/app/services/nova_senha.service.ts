import { NovaSenhaHttp } from './../http/nova_senha.http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NovaSenhaService {

  constructor(private novaSenhahttp: NovaSenhaHttp) { }

  newPass(data) {
    return this.novaSenhahttp.post(data)
    .pipe(tap(user => user));

  }
}
