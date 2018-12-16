import { Injectable } from '@angular/core';
import { RascunhoHttp } from '../http/rascunho.http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class RascunhoService {
    
    constructor(private rascunhoHttp: RascunhoHttp, private loginService: LoginService) {}
    idInstituicao = this.loginService.getUser().id;

    works(): Observable<any> {
        return this.rascunhoHttp.get(this.idInstituicao);
    }
}
