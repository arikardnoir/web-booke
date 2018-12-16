import { NotificationService } from './../../shared/messages/notification.service';
import { user } from './../../FrontEnd/login/form-login/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../FrontEnd/login/form-login/user.model';
import { PerfilService } from '../../services/perfil.I.service';



@Component({
  selector: 'rt-perfil-instituicao',
  templateUrl: './perfil-instituicao.component.html',
  styleUrls: ['./perfil-instituicao.component.css']
})
export class PerfilInstituicaoComponent implements OnInit {

  formPerfil: FormGroup;
  label = 'Ver Perfil do Administrador';
  img: any;
  constructor(private perfilService: PerfilService,
    private fb: FormBuilder,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.formPerfil = this.fb.group({
      name_university: this.fb.control('', [Validators.required]),
      initials: this.fb.control('', [Validators.required]),
      fundation_date: this.fb.control('', [Validators.required]),
      university_code: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      city: this.fb.control('', [Validators.required]),
      province: this.fb.control('', [Validators.required]),
      image: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      // password: this.fb.control('', [Validators.required]),
      // password_confirmation: this.fb.control('', [Validators.required]),
    });

    this.getDados();
    // this.imageProfile();
  }

  getDados() {
    this.perfilService.me().subscribe(users => {
      this.preencherForm(users.user);
    });
  }

  preencherForm(dados) {
    this.formPerfil.patchValue({
      name_university: dados.name_university,
      initials: dados.initials,
      fundation_date: dados.fundation_date,
      university_code: dados.university_code,
      city: dados.city,
      province: dados.province,
      // image: dados.image,
      email: dados.email,
    });
  }

  guardarAlteracoes(dados) {
    if(this.formPerfil.valid) {
      this.perfilService.guardarAlteracoes(dados).subscribe(
        datas => {
          this.notificationService.notify('Alteraçoões guardadas com sucesso.');
        },
        response => {
          
        }
      );
    } else {
      this.notificationService.notify('Campos obrigatórios.');
    }
  }

  // imageProfile() {
  //   this.perfilService.imageProfile().subscribe(
  //     datas => this.img = datas,
  //     response => console.log(response)
  //   );
  // }

}
