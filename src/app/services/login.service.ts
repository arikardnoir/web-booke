import { User } from './../FrontEnd/login/form-login/user.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


import { tap } from 'rxjs/operators';
import { LoginHttp } from '../http/login.http';
import { DataLogin } from '@FrontEnd/login/data-login.model';
import { NotificationService } from '../shared/messages/notification.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;
  status;
  loading = true;

  private urlLogin = 'http://localhost/api-booke/public/api/account/auth';

  constructor(private http: LoginHttp, private router: Router,
    private notificationService: NotificationService) { }

  verificarLogin(status) {
    if (status) {
      this.router.navigate(['/admin']);
      return true;
    }
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }


  login(dados: DataLogin) {
    this.http.post({ email: dados.email, password: dados.password }).subscribe(
        user => {
          this.loading = false;
          this.notificationService.notify('Seja Bem Vindo');
          setTimeout(() => this.isSuccess(user), 500);
        },
        response => {
          //this.notificationService.notify(response.error.message, false);
        //   this.clearForm();
         this.notificationService.notify(response.error.message);
        }
      );;
  }

  userIsAutenticade() {
    return this.getUser().token ? true : false;
  }

  setUser(user) {
    // console.log('Edmundo');
    // console.log(user);
    window.sessionStorage.setItem('userNome', user.user.name_university);
    window.sessionStorage.setItem('initials', user.user.initials);
    window.sessionStorage.setItem('userId', user.user.id);
    window.sessionStorage.setItem('userProfile', user.user.image);
    window.sessionStorage.setItem('userEmail', user.user.email);
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
      token: window.sessionStorage.getItem('userToken'),
    };
  }

  isSuccess(user) {
    if (user.status) {
      this.status = this.verificarLogin(user.status);
      this.setUser(user);
    }
  }
}
