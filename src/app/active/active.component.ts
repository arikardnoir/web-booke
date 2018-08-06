import { NotificationService } from '../shared/messages/notification.service'

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../FrontEnd/login/form-login/login.service';
import { ActiveService } from './active.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rt-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {


  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private activeService: ActiveService,
              private notificationService: NotificationService) { }

  firstParam;

  ngOnInit() {

    this.route.params.subscribe(
      params => {
         this.firstParam = params['param'];
      }
    );

    this.isSuccessToken(this.firstParam);

    this.logged();

  }

  logged(){

    this.activeService.active().subscribe(
      user => {
        this.notificationService.notify('Seja Bem Vindo');

        this.loginService.setUser({name_university: user.user.name_university, id: user.user.id,
          image: user.user.image, email: user.user.email, token: this.firstParam});

        if (this.loginService.userIsAutenticade()) {
            this.router.navigate(['/admin']);
        }
      },
      response => {
        this.pageRefresh();
      }

    )

  }

  pageRefresh() {
    location.reload();
  }

  isSuccessToken(token) {

      this.loginService.setToken(token);

  }

}
