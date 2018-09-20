import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'rt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nameUser;
  initials;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.nameUser = this.loginService.getUser().nome;
    this.initials = this.loginService.getUser().initials;

  }

}
