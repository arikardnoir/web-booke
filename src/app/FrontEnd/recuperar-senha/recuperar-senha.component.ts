import { NotificationService } from '../../shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RecuperarSenhaService } from '@FrontEnd/recuperar-senha/recuperar-senha.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'rt-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private recuperarSenhaService: RecuperarSenhaService) { }

    firstParam;
    formRecPass: FormGroup;
    logado;
  ngOnInit() {
    this.route.params.subscribe(
      params => {
         this.firstParam = params['token'];
      }
    );

    this.isSuccessToken(this.firstParam);

    this.formRecPass = this.formBuilder.group({
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      password_confirmation: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    });

  }

  recoveryPass(data) {

    if (this.formRecPass.valid) {
      this.recuperarSenhaService.recoveryPass(data, this.firstParam);
    } else {
       this.notificationService.notify('Campos obrigatórios', false);
    }

  }

  clearForm() {
    this.formRecPass.patchValue({
      password: null,
      password_confirmation: null
    });
  }

  isSuccessToken(token) {
    this.loginService.setToken(token);
  }

}
