import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'rt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search-c.css']
})
export class SearchComponent implements OnInit {

  private work;
  works = [];
  hiddenLogo = false;
  keyWords = [];
  status;
  public hideShow: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  results(wordSearch) {
    if(wordSearch != '') {
      this.router.navigate(['/resultados', wordSearch]);
    }
  }

  showOrHideMenu() {
    this.hideShow = !this.hideShow ? true : false;
    //document.querySelector('.menu');
    // document.querySelector('.modal_menu').classList.add('btn5');
  }

  hideMenu() {
    if(this.hideShow) {
      this.hideShow = false;
    }
  }


}


