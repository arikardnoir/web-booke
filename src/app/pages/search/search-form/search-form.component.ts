//import { NotificationService } from '@shared/messages/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'rt-search-form',
  templateUrl: './search-form.component.html'
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,
  //  private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: this.fb.control('', [])
    });
  }

  results(keysearch: string) {
    if(keysearch.search) {
      sessionStorage.setItem('pesquisa', JSON.stringify(keysearch));
      this.router.navigate(['/resultados', keysearch.search]);
    }
  }

}
