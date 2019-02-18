import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sobre',
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.css']
})
export class SobreComponent implements OnInit {

  private work;
  works = [];
  hiddenLogo = false;
  keyWords = [];
  status;
  public hideShow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showOrHideMenu() {
    this.hideShow = !this.hideShow ? true : false;

    if(this.hideShow) {
      
      document.querySelector('.m').classList.remove('_menu');
      document.querySelector('.m').classList.add('modal_menu');
    } else {
      document.querySelector('.m').classList.remove('modal_menu');
      document.querySelector('.m').classList.add('_menu');
    }
    //document.querySelector('.menu');
    
  }

  hideMenu() {
    document.querySelector('.m').classList.remove('modal_menu');
    document.querySelector('.m').classList.add('_menu');
  }

}
