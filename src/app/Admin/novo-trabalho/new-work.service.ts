import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DataWork } from './data-work.model';
import { LoginService } from '../../FrontEnd/login/form-login/login.service';


@Injectable()
export class NewWorkService {

    constructor(private http: HttpClient, private loginService: LoginService) {}

    data;
    id = this.loginService.getUser().id;
    headers = new HttpHeaders();
    header = this.headers.set('Authorization', `Bearer ${this.loginService.getUser().token}`);

    createNewWork(dados): Observable<any> {

      const urlCreateWork = `http://localhost/Booke/api-booke/public/api/v2/work`;
      dados.university_id = this.id;

        return this.http.post<any>(urlCreateWork, dados,
                   {headers: this.header}).pipe(tap(data => this.data = data));
    }
}
