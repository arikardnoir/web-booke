import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoginService } from '../../FrontEnd/login/form-login/login.service';



@Injectable()

export class PerfilInstituicaoService {


  constructor(private http: HttpClient, private loginService: LoginService) {}

  private urlMe = 'http://localhost/repositorio-de-trabalhos/API/public/api/account/me';
  private urlGuardar = 'http://localhost/repositorio-de-trabalhos/API/public/api/v2/user/';
  private urlImgProfile = 'http://localhost/repositorio-de-trabalhos/API/public/api/v2/image/';

  data;
  id = this.loginService.getUser().id;
  img = this.loginService.getUser().image;

  headers = new HttpHeaders();
  header = this.headers.set('Authorization', `Bearer ${this.loginService.getUser().token}`);

  me(): Observable<any> {

    if (this.loginService.isLoggedIn()) {
      console.log('Entrou');
      this.headers = this.headers.set('Authorization', `Bearer ${this.loginService.getUser().token}`);

      // Aqui tem que negar isso, e retornar para a home page da Aplicacao
    }

   return this.http.get<any>(this.urlMe , {headers: this.header}).pipe(tap(data => this.data = data));
  }

  guardarAlteracoes(dadosUser): Observable<any> {

    if (this.loginService.isLoggedIn()) {

      // Aqui tem que negar isso, e retornar para a home page da Aplicacao

    }

    return this.http.put<any>(this.urlGuardar + this.id,
      {
        name_university: dadosUser.name_university,
        initials: dadosUser.initials,
        fundation_date: dadosUser.fundation_date,
        university_code: dadosUser.university_code,
        city: dadosUser.city,
        province: dadosUser.province,
        image: dadosUser.image,
        email: dadosUser.email
      }, {headers: this.header}
    )
    .pipe(tap(data => this.data = data));
  }

  imageProfile(): Observable<any> {

   return this.http.get<any>(this.urlImgProfile + `${this.img}` ,
               {headers: this.header}).pipe(tap(data => this.data = data));
  }

}

