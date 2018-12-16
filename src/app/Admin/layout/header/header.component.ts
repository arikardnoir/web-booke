import { NotificationService } from './../../../shared/messages/notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from './header.service';
import { LoginService } from '../../../services/login.service';
import { LogoutService } from '../../../services/logout.service';

@Component({
  selector: 'rt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nameUser;
  initials;
  constructor(private loginService: LoginService, private router: Router,
    private notificationService: NotificationService, private logoutService: LogoutService,) 
  {}

  ngOnInit() {
    this.nameUser = this.loginService.getUser().nome;
    this.initials = this.loginService.getUser().initials;
  }

  logout() {
    this.logoutService.logout().subscribe(
      status => {
        this.notificationService.notify(`Até mais, ${this.loginService.getUser().nome}`);
        sessionStorage.clear();
        this.router.navigate(['/login']);
      });
  }

}
