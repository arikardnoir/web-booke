import { PerfilHttp } from './../http/perfil.http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from './login.service';

//import { LoginService } from '../../services/login.service';



@Injectable()

export class PerfilService { 


  constructor(private perfilHttp: PerfilHttp, private loginService: LoginService) {}

  private urlMe = 'http://localhost/repositorio-de-trabalhos/API/public/api/account/me';
  private urlGuardar = 'http://localhost/repositorio-de-trabalhos/API/public/api/v2/user/';
  private urlImgProfile = 'http://localhost/repositorio-de-trabalhos/API/public/api/v2/image/';

  data;
  id = this.loginService.getUser().id;
  img = this.loginService.getUser().image;

//   headers = new HttpHeaders();
//   header = this.headers.set('Authorization', `Bearer ${this.loginService.getUser().token}`);

  me(): Observable<any> {

    // if (this.loginService.isLoggedIn()) {
    //   console.log('Entrou');
    //   this.headers = this.headers.set('Authorization', `Bearer ${this.loginService.getUser().token}`);

    //   // Aqui tem que negar isso, e retornar para a home page da Aplicacao
    // }

   return this.perfilHttp.getMe();
  }

  guardarAlteracoes(dadosUser): Observable<any> {

    if (this.loginService.isLoggedIn()) {
      // Aqui tem que negar isso, e retornar para a home page da Aplicacao
    }

    return this.perfilHttp.put(this.id, dadosUser)
      .pipe(tap(data => this.data = data));
  }

  imageProfile(): Observable<any> {

    return this.perfilHttp.getImage(this.img)
    .pipe(tap(data => this.data = data));
  }

}

