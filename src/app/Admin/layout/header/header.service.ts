import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from '../../../FrontEnd/login/form-login/login.service';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient, private loginService: LoginService) {}

  urlLogout = 'https://api-booke.herokuapp.com/api/account/logout';

  logout(): Observable<any> {

    return this.http.get<any>(this.urlLogout).pipe(status => status);

  }
}
