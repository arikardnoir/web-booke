import { Router } from '@angular/router';
import { DataSearch } from './data-search.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private router: Router, private http: HttpClient) { }

  private urlSearchAll = 'http://localhost/repositorio-de-trabalhos/API/public/api/v2/workout/search';
  private urlSearchName = 'http://localhost/repositorio-de-trabalhos/API/public/api/v2/workout/search/name';
  private urlSearchDescription = 'http://localhost/repositorio-de-trabalhos/API/public/api/v2/workout/search/description';

  searchAll(keysearch: String): Observable<any> {
    const urlAPI = `${this.urlSearchAll}?key_search=${keysearch}`;
    return this.http.get<any>(urlAPI)
               .pipe(tap(works => works));

  }

  searchName(data: DataSearch) {
    const urlAPI = `${this.urlSearchName}?key_search=${data.keysearch}`;
    return this.http.get<any>(urlAPI)
               .pipe(tap(works => works));

  }

  searchDescription(data: DataSearch) {
    const urlAPI = `${this.urlSearchDescription}?key_search=${data.keysearch}`;
    return this.http.get<any>(urlAPI)
               .pipe(tap(works => works));
  }
}
