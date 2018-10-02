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

  private urlSignup = 'https://api-booke.herokuapp.com/api/v2/user';

  data: DataCadastro;

  getDados(dados): Observable<any> {

    return this.http.post<any>(this.urlSignup, dados)
            .pipe(tap(data => this.data = data));
  }
}

