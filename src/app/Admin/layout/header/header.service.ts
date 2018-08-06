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

  urlLogout = 'http://localhost/repositorio-de-trabalhos/API/public/api/account/logout';
  headers = new HttpHeaders();
  header = this.headers.set('Authorization', `Bearer ${this.loginService.getUser().token}`);

  logout(): Observable<any> {

    return this.http.get<any>(this.urlLogout,{headers: this.header}).pipe(status => status);

  }
}
