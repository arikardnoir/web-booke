import { NotificationService } from './../../shared/messages/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataWork } from './data-work.model';
import { LoginService } from '../../services/login.service';
import { NewWorkService } from '../../services/new_work.service';

@Component({
  selector: 'rt-novo-trabalho',
  templateUrl: './novo-trabalho.component.html',
  styleUrls: ['./novo-trabalho.component.css']
})
export class NovoTrabalhoComponent implements OnInit {

  tipoTrabalho = ['artigos', 'tcc', 'teses', 'dissertacoes', 'livros'];
  id = this.loginService.getUser().id;
  name = this.loginService.getUser().nome;
  formTrabalho: FormGroup;
  selectedFile: File;

  constructor(private fb: FormBuilder,
    private notificationService: NotificationService,
    private newWorkService: NewWorkService,
    private loginService: LoginService) { }

  ngOnInit() {

    this.formTrabalho = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      subtitle: this.fb.control(''),
      author: this.fb.control('', [Validators.required]),
      author2: this.fb.control(''),
      author3: this.fb.control(''),
      publication_city: this.fb.control('', [Validators.required]),
      publication_year: this.fb.control('', [Validators.required]),
      volume: this.fb.control(''),
      type: this.fb.control('', [Validators.required]),
      page_number: this.fb.control('', [Validators.required]),
      name_university: this.fb.control(''),
      course: this.fb.control('', [Validators.required]),
      campus: this.fb.control(''),
      file: this.fb.control('', [Validators.required]),
      keywords: this.fb.control('', [Validators.required]),
      resume: this.fb.control('', [Validators.required])
    });

  //this.preencherForm();

  }

  uploadFile(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  createNewWork(dados) {
    if (this.formTrabalho.valid) {
      const fd = new FormData();
      fd.append('title', dados.title);
      fd.append('subtitle', dados.subtitle);
      fd.append('author', dados.author);
      fd.append('author2', dados.author2);
      fd.append('author3', dados.author3);
      fd.append('publication_city', dados.publication_city);
      fd.append('publication_year', dados.publication_year);
      fd.append('volume', dados.volume);
      fd.append('type', dados.type);
      fd.append('page_number', dados.page_number);
      fd.append('name_university', this.name);
      fd.append('course', dados.course);
      fd.append('campus', dados.campus);
      fd.append('file', this.selectedFile, this.selectedFile.name);
      fd.append('university_id', this.id);
      fd.append('keywords', dados.keywords);
      fd.append('resume', dados.resume);

      //console.log(this.selectedFile.name);

      if (fd) {

        this.newWorkService.createNewWork(fd)
          .subscribe(
            data => {
              this.notificationService.notify(data.message);
              if (data.status) {
                this.clearForm();
              }
            },
            response => { console.log('Erro ao add novo trabalho') }//this.notificationService.notify(response.message)
          );
      }

    } else {
      this.notificationService.notify('Verifique se os campos estão corretamente preenchidos', false);
    }
  }

  // preencherForm() {
  //   this.formTrabalho.patchValue({

  //     title: 'Mineracao de dados de Pessoas Com Deficiencia',
  //     subtitle: 'Na Apae de Criciuma',
  //     author: 'Simiao Das Palmas',
  //     author2: 'Carlos Maluco',
  //     author3: 'Euclides Mais Maluco',
  //     publication_city: 'Luanda',
  //     publication_year: '2018-07-01',
  //     volume: '2',
  //     page_number: '90',
  //     name_university: 'Universidade Catolica de Angola',
  //     course: 'Ciencia da Computacao',
  //     campus: 'Engenharia',
  //     keywords: 'Testes Testes Testes Testes ',
  //     resume: 'Testes Testes Testes Testes Testes Testes Testes Testes Testes '

  //   });
  // }

  clearForm() {
    this.formTrabalho.patchValue({

      title: null,
      subtitle: null,
      author: null,
      author2: null,
      author3: null,
      publication_city: null,
      publication_year: null,
      volume: null,
      page_number: null,
      name_university: null,
      course: null,
      campus: null,
      keywords: null,
      resume: null

    });
  }

}
