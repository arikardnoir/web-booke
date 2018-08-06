import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ModalService {

  private urlForgetPass = 'http://localhost/repositorio-de-trabalhos/API/public/api/account/forgetpass';
  private urlDownloadFile = 'http://localhost/repositorio-de-trabalhos/API/public/api/v2/workout/file/';

  constructor(private http: HttpClient) { }

  forget_pass(email): Observable<any>  {
    return this.http.post<any>(this.urlForgetPass,
      { email: email})
      .pipe(status => status);
  }

  downloadFile(fileName): Observable<any> {

    return this.http.get<any>(this.urlDownloadFile+fileName);

  }

}
