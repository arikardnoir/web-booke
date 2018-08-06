import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'rt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private work;
  works = [];
  hiddenLogo = false;
  keyWords = [];
  status;
  constructor(private router: Router) { }


  ngOnInit() {}

  // results(keysearch: string) {
  //   this.router.navigate(['/resultados', keysearch]);
  // }


}


