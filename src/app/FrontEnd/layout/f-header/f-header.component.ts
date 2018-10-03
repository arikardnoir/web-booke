import { state } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../shared/messages/notification.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'rt-f-header',
  templateUrl: './f-header.component.html',
  styleUrls: ['./f-header.component.css']
})
export class FHeaderComponent implements OnInit, AfterContentChecked {

  searchTop: FormGroup;
  hiddenLogo = false;
  valueSearch;
  token;
  nome;

  constructor(private route: ActivatedRoute,
    private loginService: LoginService, private router: Router,
     private fb: FormBuilder,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute) {
    }

  ngOnInit() {
    this.searchTop = this.fb.group({ search: this.fb.control('') });
    let pesquisa = JSON.parse(sessionStorage.getItem('pesquisa'));
    //this.valueSearch = pesquisa.search;

    setTimeout(() => sessionStorage.removeItem('pesquisa'), 2000);

    this.token = this.loginService.getUser().token;
    this.nome = this.loginService.getUser().nome;

  }

  _searchTop(keysearch: string) {
    console.log(keysearch.search);
    const value = keysearch.search;
    console.log(value);
    // this.router.navigate(['/resultados', keysearch.search]);
    this.notificationService.notify(value.toString(), 'Ok');
  }

  ngAfterContentChecked() {

    if (this.router.routerState.snapshot.url.includes('search') ||
      this.router.routerState.snapshot.url.includes('/login')) {
      this.hiddenLogo = true;
    } else {
      this.hiddenLogo = false;
    }

  }

}
