import { NotificationService } from './../../../shared/messages/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'rt-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,
    private searchService: SearchService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: this.fb.control('', [])
    });
  }

  results(keysearch: string) {
    this.router.navigate(['/resultados', keysearch.search]);
  }

}
