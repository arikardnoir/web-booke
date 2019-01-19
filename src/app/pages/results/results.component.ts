import { SearchService } from '@resources/search/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ResultsService } from '@resources/results/results.service';
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
  searchTop: FormGroup;

  public university_search = ''
  public keyword_search = ''

  constructor(public searchService: SearchService, private resultsService: ResultsService, private route: ActivatedRoute,
    private fb: FormBuilder,
    private mService: ModalNotificationService, private notificationService: NotificationService) { }

  works = [];
  verifyWorks: boolean = false;

  ngOnInit() {

    this.filtroSearch = this.fb.group({
      key_university: this.fb.control(''),
      key_search: this.fb.control('')
    });

    this.searchTop = this.fb.group({
      search: this.fb.control('')
    });

    this.route.params.subscribe(
      params => {
        let paramSearch = params['search'];
        this.getWorks(paramSearch);
      }
    );

  }

  searchWork(value) {
    this.getWorks(value['search']);
  }

  getWorks(paramSearch) {
    this.loading = true;

    if (paramSearch) {
      this.searchService.searchAll(paramSearch).subscribe(data => {
        this.loading = false;
        if(data['data'].length == 0) {
          this.verifyWorks = true;
        }
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
      this.resultsService.getWorkFilter(this.university_search, this.keyword_search).subscribe(
        datas => this.iterarDados(datas),
        response => console.log(response.message)
      );
      this.loading = false;
    }
    // } else if (!(dados.key_search.length === 0)) {
    //   this.resultsService.showWorkKey(dados.key_search).subscribe(
    //     datas => this.iterarDados(datas),
    //     response => console.log(response.message)
    //   );
    //   this.loading = false;
    // } else {
    //   this.loading = false;
    //   //console.log('Erro Total..');
    // }
  }

  iterarDados(datas) {
    if (this.works.length !== 0) {
      this.works = [];
    }

    for (let i = 0; i < datas.data.length; i++) {
      this.works.push(datas.data[i]);
      datas.data[i].keywords = datas.data[i].keywords.split(';');
    }

    return this.works;
  }

  showResumo(resume) {
    
    for (let i = 0; i < this.works.length; i++) {
      if (this.works[i].id === resume) {
        const work = this.works[i];

        this.mService.notify({ work: work, value: true });
        this.resultsService.setWork(work.id, work.title, work.file);

      }
    }

  }

  search_mobile() {
    this.getWorks(this.valueSearchMobile);
  }

  animationSearch() {
    document.querySelector('.span-search').classList.toggle('inclicked');
    //console.log(document.querySelector('.span-search'));
    document.querySelector('.s').classList.toggle('close');
    
    setTimeout(() => {
      document.querySelector('.s').classList.toggle('s-border');
    }, 1000)
    
    
  }
  

}

