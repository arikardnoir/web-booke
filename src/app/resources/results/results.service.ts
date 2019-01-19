import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultsHttp } from '@resources/results/results.http';

@Injectable()
export class ResultsService {

    urlAllWorks = 'https://api-booke.herokuapp.com/api/v2/workout/searchall';
    works = [];
    constructor(private resultsHttp: ResultsHttp) {}

    getWorkFilter(university_search?, keyword_search?) {
      return this.resultsHttp.getWorkFilter(university_search, keyword_search);
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

    iterarDados(datas) {
      //this.loading = false;
  
      if (this.works.length !== 0) {
        this.works = [];
      }
  
      for ( let i = 0; i < datas.data.length; i++) {
        this.works.push(datas.data[i]);
        datas.data[i].keywords = datas.data[i].keywords.split(';');
      }

      return this.works;
    }
}
