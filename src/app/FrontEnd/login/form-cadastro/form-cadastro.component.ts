import { CadastroService } from './cadastro-service';
import { DataCadastro } from './../data-cadastro.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../shared/messages/notification.service';

@Component({
  selector: 'rt-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  formCadastro: FormGroup;
  selectedFile: File;
  imgAvatar;
  constructor(private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      name_university: this.formBuilder.control('', [Validators.required]),
      initials: this.formBuilder.control('', [Validators.required]),
      fundation_date: this.formBuilder.control('', [Validators.required]),
      university_code: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      city: this.formBuilder.control('', [Validators.required]),
      province: this.formBuilder.control('', [Validators.required]),
      image: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      status: this.formBuilder.control(''),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      password_confirmation: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    });
    this.preencherForm();
    // this.imgAvatar = this.formCadastro.get('image');
    // console.log(this.imgAvatar);
    // const formData = new FormData();
    // formData.append('foto', this.imgAvatar);
  }

   uploadImage(event) {
     this.selectedFile = <File>event.target.files[0];
     console.log(this.selectedFile);
   }

  getDados(dados) {
    this.notificationService.notify('', true);
    if (this.formCadastro.valid) {

      const fd = new FormData();
      fd.append('name_university', dados.name_university);
      fd.append('initials', dados.initials);
      fd.append('fundation_date', dados.fundation_date);
      fd.append('university_code', dados.university_code);
      fd.append('city', dados.city);
      fd.append('province', dados.province);
      fd.append('image', this.selectedFile, this.selectedFile.name);
      fd.append('email', dados.email);
      fd.append('status', dados.status);
      fd.append('password', dados.password);
      fd.append('password_confirmation', dados.password_confirmation);

      console.log(fd);

      this.cadastroService.getDados(fd).subscribe(data => {
        //this.notificationService.notify('Usuário cadastrado com sucesso !', false);
        this.notificationService.notify(data.message, false);
        this.clearForm();
      },
        response => {
          //this.notificationService.notify('Erro ao cadastrar, verifique os campos !', false);
          this.notificationService.notify(response.message, false);
        }
      );
    } else {
      return this.notificationService.notify('Campos obrigatórios', false);
    }
  }

  clearForm() {
    this.formCadastro.patchValue({
      name_university: null,
      initials: null,
      fundation_date: null,
      university_code: null,
      city: null,
      province: null,
      image: null,
      email: null,
      password: null,
      password_confirmation: null
    });
  }

  preencherForm() {
    this.formCadastro.patchValue({
      name_university: 'Universidade Agostinho Neto',
      initials: 'UAN',
      fundation_date: '2018-04-11',
      university_code: '123456789',
      city: 'luanda',
      province: 'luanda',
      image: null,
      email: 'edmundo@unesc.net',
      password: '1234567',
      password_confirmation: '1234567'
    });
  }

}
