import { SearchService } from '@resources/search/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  public p;
  public universities = [];

  constructor(public searchService: SearchService, 
    private resultsService: ResultsService, 
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private mService: ModalNotificationService, private notificationService: NotificationService) { }

  works = [];
  verifyWorks: boolean = false;

  ngOnInit() {
    
    this.filtroSearch = this.fb.group({
      university_search: this.fb.control(''),
      keyword_search: this.fb.control('')
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
    this.router.navigate(['/resultados', paramSearch]);

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

    if (dados.university_search != '' || dados.keyword_search != '') {

      if (dados.university_search != '' && dados.keyword_search != '') {
        this.router.navigate(['/resultados', `${dados.university_search}&${dados.keyword_search}`]);
      } else {
        
        if (dados.university_search != '') {
          this.router.navigate(['/resultados', dados.university_search]);
        } else {
          this.router.navigate(['/resultados', dados.keyword_search]);
        }
        
      }
      
      
      this.resultsService.getWorkFilter(dados.university_search, dados.keyword_search).subscribe(
        data => {
          this.loading = false;
          if(data['data'].length == 0) {
            this.verifyWorks = true;
          } else {
            this.verifyWorks = false;
          }
          this.iterarDados(data)
        },
        response => console.log(response.message)
      );
      

    } else {
      this.loading = false;
      //console.log('Erro Total..');
    }
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

  getUniversity() {
    this.resultsService.getUniversity().subscribe((resp) => {
      this.universities = resp['data'];
    })
  }
  

}

