import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { WorkHttp } from '../http/work.http';
import { LoginService } from './login.service';


@Injectable()
export class NewWorkService {

    constructor(private httpWork: WorkHttp, private loginService: LoginService) {}

    data;
    id = this.loginService.getUser().id;
    createNewWork(dados): Observable<any> {
        dados.university_id = this.id;
        return this.httpWork.post(dados)
        .pipe(tap(data => this.data = data));
    }
}
