import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { DataSearch } from '@FrontEnd/results/data-search.model';
import { SearchHttp } from '../http/search.http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private router: Router, public searchHttp: SearchHttp) { }

  private urlSearchAll = 'https://api-booke.herokuapp.com/api/v2/workout/search';
  private urlSearchName = 'https://api-booke.herokuapp.com/api/v2/workout/search/name';
  private urlSearchDescription = 'https://api-booke.herokuapp.com/api/v2/workout/search/description';

//   searchAll(keysearch: String): Observable<any> {
//     const urlAPI = `${this.urlSearchAll}?key_search=${keysearch}`;
//     return this.http.get<any>(urlAPI)
//                .pipe(tap(works => works));

//   }

  searchAll(keysearch: String) {
    return this.searchHttp.getAll(keysearch);
  }

  searchName(data: DataSearch) {
    this.searchHttp.getName(data.keysearch).subscribe(data => console.log(data));
  }

  searchDescription(data: DataSearch) {
    this.searchHttp.getDescription(data.keysearch).subscribe(data => console.log(data));
  }
}
