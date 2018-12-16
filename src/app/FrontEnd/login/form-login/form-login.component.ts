import { DataLogin } from '@FrontEnd/login/data-login.model';
import { NotificationService } from '../../../shared/messages/notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventEmitter } from 'protractor';
import { User } from '@FrontEnd/login/form-login/user.model';
import { isError } from 'util';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'rt-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;
  logado;
  status;
  public loading = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    
    if (this.loginService.userIsAutenticade()) {
      this.router.navigate(['/admin']);
    }

    this.formLogin = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required)
    });
  }

  login(dados: DataLogin) {
    this.loading = true;
    if (dados.email && dados.password) {
      this.loginService.login(dados);
    } else {
      this.loading = false;
      this.notificationService.notify('Campos Obrigátorios', false);
    }
  }

  isSuccess(user) {
    if (user.status) {
      this.status = this.loginService.verificarLogin(user.status);
      this.loginService.setUser({
        name_university: user.user.name_university, initials: user.user.initials,
        id: user.user.id,
        image: user.user.image, email: user.user.email, token: user.token
      });
    }
  }

  clearForm() {
    this.formLogin.patchValue({
      password: null
    });
  }

}
