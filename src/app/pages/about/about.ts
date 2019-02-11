import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})

//var  $;
export class AboutComponent implements OnInit {

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
    if(this.hideShow) {
      document.querySelector('.m').classList.remove('modal_menu');
      document.querySelector('.m').classList.add('_menu');
    }
  }

}
