import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecuperarSenhaService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders();
  header;

  private urlRecPass = 'http://localhost/repositorio-de-trabalhos/API/public/api/account/recpass';

  recoveryPass(data,token): Observable<any> {

    this.header = this.headers.set('Authorization', `Bearer ${token}`);

      return this.http.post<any>(this.urlRecPass,data,{headers: this.header})
          .pipe(tap(user => user));
  }

}
