import { Router } from '@angular/router';
import { DataLogin } from './../data-login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  private urlLogin = 'https://api-booke.herokuapp.com/api/account/auth';

  constructor(private http: HttpClient, private router: Router) { }

  verificarLogin(status) {
    if (status) {
      this.router.navigate(['/admin']);
      return true;
    }
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }


  login(dados: DataLogin): Observable<User> {
    return this.http.post<User>(this.urlLogin,
        { email: dados.email, password: dados.password })
        .pipe(tap(user => this.user = user));
  }

  userIsAutenticade() {
    return this.getUser().token ? true : false;
  }

  setUser(user) {
    window.sessionStorage.setItem('userNome', user.name_university);
    window.sessionStorage.setItem('initials', user.initials);
    window.sessionStorage.setItem('userId', user.id);
    window.sessionStorage.setItem('userProfile', user.image);
    window.sessionStorage.setItem('userEmail', user.email);
    window.sessionStorage.setItem('userToken', user.token);
  }

  getUser() {
   return {
      nome: window.sessionStorage.getItem('userNome'),
      initials: window.sessionStorage.getItem('initials'),
      id: window.sessionStorage.getItem('userId'),
      image: window.sessionStorage.getItem('userProfile'),
      email: window.sessionStorage.getItem('userEmail'),
      token: window.sessionStorage.getItem('userToken'),
    };
  }

  setToken(token) {
    window.sessionStorage.setItem('token', token);
  }

  getToken() {
   return {
      token: window.sessionStorage.getItem('token'),
    };
  }
}
