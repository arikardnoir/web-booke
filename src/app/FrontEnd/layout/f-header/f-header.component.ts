import { SearchService } from './../../search/search.service';
import { state } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { LoginService } from '../../login/form-login/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationService } from '../../../shared/messages/notification.service';

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
    private searchService: SearchService, private fb: FormBuilder,
    private notificationService: NotificationService) {
    }

  ngOnInit() {
    this.searchTop = this.fb.group({ search: this.fb.control('') });
    this.valueSearch = this.router.routerState.snapshot.url;

    this.token = this.loginService.getUser().token;
    this.nome = this.loginService.getUser().nome;
  }

  _searchTop(keysearch: string) {
    const value = keysearch.search;
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
