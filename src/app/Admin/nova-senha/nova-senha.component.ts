import { NotificationService } from '../../shared/messages/notification.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../FrontEnd/login/form-login/login.service';
import { NovaSenhaService } from './nova-senha.service';

@Component({
  selector: 'rt-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.css']
})
export class NovaSenhaComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private novaSenhaService: NovaSenhaService) { }

  formNewPass: FormGroup;
  logado = false;
  ngOnInit() {
    this.formNewPass = this.formBuilder.group({
      email: this.formBuilder.control(this.loginService.getUser().email, [Validators.required, Validators.minLength(6)]),
      oldPassword: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      password_confirmation: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  newPass(data){

    if (this.formNewPass.valid) {

      this.novaSenhaService.newPass(data).subscribe(data => {

        this.notificationService.notify(data.message, false);
        console.log(data);
        this.clearForm();
      },
        response => {
          //this.notificationService.notify('Erro ao cadastrar, verifique os campos !', false);
          this.notificationService.notify(response.message, false);
        }
      );
    } else {
       this.notificationService.notify('Campos obrigatórios', false);
    }

  }

  clearForm() {
    this.formNewPass.patchValue({
      oldPassword: null,
      password: null,
      password_confirmation: null
    });
  }

}
