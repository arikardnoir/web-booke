import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResultsService {

    urlAllWorks = 'http://localhost/Booke/api-booke/public/api/v2/workout/searchall';
    constructor(private http: HttpClient) {}

    showWorkUni(key_university): Observable<any> {
      const urlAPI = `${this.urlAllWorks}?key_university=${key_university}`;

        return this.http.get<any>(urlAPI);
    }

    showWorkKey(key_search): Observable<any> {
      const urlAPI = `${this.urlAllWorks}?key_search=${key_search}`;

        return this.http.get<any>(urlAPI);
    }

    setWork(id,title,file) {
      window.sessionStorage.setItem('id', id);
      window.sessionStorage.setItem('title', title);
      window.sessionStorage.setItem('file', file);
    }

    getWork() {
     return {
        id: window.sessionStorage.getItem('id'),
        title: window.sessionStorage.getItem('title'),
        file: window.sessionStorage.getItem('file'),
      };
    }
}
