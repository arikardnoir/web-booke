import { state } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

//import { NotificationService } from '../../../shared/messages/notification.service';


@Component({
  selector: 'rt-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css']
})


export class FrontEndComponent implements OnInit, AfterContentChecked {

  
  searchTop: FormGroup;
  hiddenLogo = false;
  valueSearch;
  token;
  nome;
  
  constructor(private route: ActivatedRoute, private router: Router,
     private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    }

  ngOnInit() {
    this.searchTop = this.fb.group({ search: this.fb.control('') });
    let pesquisa = JSON.parse(sessionStorage.getItem('pesquisa'));
    //this.valueSearch = pesquisa.search;

    setTimeout(() => sessionStorage.removeItem('pesquisa'), 2000);

    document.querySelector('.fa-filter').addEventListener('click', () => {
      document.querySelector('.content-filter').classList.toggle('hide');
    });
  }

  _searchTop(keysearch: string) {
    console.log(keysearch.search);
    const value = keysearch.search;
    console.log(value);
    this.router.navigate(['/resultados', keysearch.search]);
    //this.notificationService.notify(value.toString(), 'Ok');
  }

  ngAfterContentChecked() {

    if (this.router.routerState.snapshot.url.includes('search')){
      this.hiddenLogo = true;
    } else {
      this.hiddenLogo = false;
    }

  }

  animationSearch() {
    document.querySelector('.search').classList.toggle('close');
    document.querySelector('.input').classList.toggle('square');
    
  }


}
