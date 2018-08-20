import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {LoginService} from '@FrontEnd/login/form-login/login.service';

@Injectable({
  providedIn: 'root'
})
export class NovaSenhaService {

  constructor(private http: HttpClient,
              private loginService: LoginService) { }

  headers = new HttpHeaders();
  header = this.header = this.headers.set('Authorization', `Bearer ${this.loginService.getUser().token}`);

  private urlNewPass = 'https://api-booke.herokuapp.com/api/v2/newpass';

  newPass(data) {

    return this.http.post<any>(this.urlNewPass, data, {headers: this.header})
          .pipe(tap(user => user));

  }
}
