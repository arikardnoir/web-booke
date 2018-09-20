import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../FrontEnd/login/form-login/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  constructor(private loginService: LoginService, private http: HttpClient) { }

  private urlActive = 'https://api-booke.herokuapp.com/api/account/activate';

  user: User;
  tkn = this.loginService.getToken().token;

  headers = new HttpHeaders();
  header = this.headers.set('Authorization', `Bearer ${this.loginService.getToken().token}`);

  active(): Observable<any> {

    return this.http.get<any>(this.urlActive ,
                {headers: this.header}).pipe(tap(user => this.user = user));
  }



}
