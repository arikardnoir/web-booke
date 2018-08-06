import { LoginService } from './../../FrontEnd/login/form-login/login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PerfilService {

    urlLogin = 'http://localhost/repositorio-de-trabalhos/API/public/api/account/auth';
    constructor(private http: HttpClient, private loginService: LoginService) {}

    getDados(): Observable<any> {
        return this.http.get<any>(this.urlLogin);
    }
}
