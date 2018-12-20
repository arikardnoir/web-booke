import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataSearch } from '@pages/results/data-search.model';
import { SearchHttp } from '@resources/search/search.http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private router: Router, public searchHttp: SearchHttp) { }

searchAll(keysearch: String) {
  return this.searchHttp.getAll(keysearch)
}

  searchName(data: DataSearch) {
    this.searchHttp.getName(data.keysearch).subscribe(data => console.log(data));
  }

  searchDescription(data: DataSearch) {
    this.searchHttp.getDescription(data.keysearch).subscribe(data => console.log(data));
  }
}
