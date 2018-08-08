import { DataCadastro } from './../data-cadastro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  constructor(private http: HttpClient) { }

  private urlSignup = 'http://localhost/Booke/api-booke/public/api/v2/user';

  data: DataCadastro;

  // getDados(dados: DataCadastro): Observable<any> {

  //   return this.http.post(this.urlSignup,
  //                   { name_university: dados.name_university,
  //                     initials: dados.initials,
  //                     fundation_date: dados.fundation_date,
  //                     university_code: dados.university_code,
  //                     city: dados.city,
  //                     province: dados.province,
  //                     image: dados.image,
  //                     email: dados.email,
  //                     password: dados.password,
  //                     password_confirmation: dados.password_confirmation})


 /* getDados(dados, fd): Observable<any> {

    return this.http.post<any>(this.urlSignup + `name_university= ${dados.name_university}&
                      initials= ${dados.initials}&
                      fundation_date= ${dados.fundation_date}&
                      university_code= ${dados.university_code}&
                      city= ${dados.city}&
                      province= ${dados.province}&
                      email= ${dados.email}&
                      password= ${dados.password}&
                      password_confirmation= ${dados.password_confirmation}`, fd)

               .pipe(tap(data => this.data = data));
  } */

  getDados(dados): Observable<any> {

    return this.http.post<any>(this.urlSignup, dados)
            .pipe(tap(data => this.data = data));
  }
}

