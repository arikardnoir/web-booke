import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { LoginService } from '../../FrontEnd/login/form-login/login.service';

@Injectable()
export class RascunhoService {
    url = 'https://api-booke.herokuapp.com/api/v2/work/showall/';

    constructor(private http: HttpClient, private loginService: LoginService) {}

    headers = new HttpHeaders();
    header = this.headers.set('Authorization', `Bearer ${this.loginService.getUser().token}`);

    works(): Observable<any> {

        return this.http.get<any>(this.url + this.loginService.getUser().id, {headers: this.header});
    }
}
