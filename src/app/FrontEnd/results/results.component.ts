import { SearchService } from './../../services/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { NotificationService } from '../../shared/messages/notification.service';
import { ModalNotificationService } from '../../shared/messages/modal.service';

@Component({
  selector: 'rt-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public loading = false;
  public valueSearchMobile: any = '';
  filtroSearch: FormGroup;

  constructor(public searchService: SearchService, private resultsService: ResultsService , private route: ActivatedRoute,
    private fb: FormBuilder,
    private mService: ModalNotificationService, private notificationService: NotificationService) { }

  works = [];

  ngOnInit() {
    this.filtroSearch = this.fb.group({
      key_university: this.fb.control(''),
      key_search: this.fb.control('')
    });

    this.route.params.subscribe(
      params => {
        const paramSearch = params['search'];
        this.getWorks(paramSearch);
      }
    );

    if (this.notificationService.notifier) {
      this.notificationService.notifier.subscribe( message => {
        this.getWorks(message);
      });
    }
  }

  getWorks(paramSearch) {
    this.loading = true;
    if (paramSearch) {
      this.searchService.searchAll(paramSearch).subscribe(data => {
        this.loading = false;
        this.iterarDados(data)
      })
      
    } else {
      //alert('Preencha corretamente o campo');
      this.loading = false;
    }
  }

  getFilter(dados) {
    this.loading = true;
    if (!(dados.key_university.length === 0)) {
      this.resultsService.showWorkUni(dados.key_university).subscribe(
        datas => this.iterarDados(datas),
        response => console.log(response.message)
      );
      this.loading = false;
    } else if (!(dados.key_search.length === 0)) {
      this.resultsService.showWorkKey(dados.key_search).subscribe(
        datas => this.iterarDados(datas),
        response => console.log(response.message)
      );
      this.loading = false;
    } else {
      this.loading = false;
      //console.log('Erro Total..');
    }
  }

  iterarDados(datas) {
    //this.loading = false;

    if (this.works.length !== 0) {
      this.works = [];
    }

    for ( let i = 0; i < datas.data.length; i++) {
      this.works.push(datas.data[i]);
      datas.data[i].keywords = datas.data[i].keywords.split(';');
    }

    return this.works;
  }

  showResumo(resume) {
    for (let i = 0; i < this.works.length; i++) {
      if (this.works[i].id === resume) {
        const work = this.works[i];

        this.mService.notify({work:work, value: true});
        this.resultsService.setWork(work.id, work.title, work.file);

      }
    }

  }

  search_mobile(){
    this.getWorks(this.valueSearchMobile);
  }

}

