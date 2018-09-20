import { Component, OnInit } from '@angular/core';
import { RascunhoService } from '../../services/rascunho.service';

@Component({
  selector: 'rt-rascunho',
  templateUrl: './rascunho.component.html',
  styleUrls: ['./rascunho.component.css']
})
export class RascunhoComponent implements OnInit {

  works = [];
  constructor(private rascunhoService: RascunhoService) { }

  ngOnInit() {
    this.work();
  }

  work() {
    this.rascunhoService.works()
    .subscribe(works => this.iterarDados(works));
  }

  iterarDados(datas) {
    // this.loading = false;

    if (this.works.length !== 0) {
      this.works = [];
    }

    for ( let i = 0; i < datas.data.length; i++) {
      this.works.push(datas.data[i]);
      datas.data[i].keywords = datas.data[i].keywords.split(';');
    }
  }

}
