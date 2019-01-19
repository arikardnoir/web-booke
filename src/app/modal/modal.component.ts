import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResultsService } from '@resources/results/results.service';
import { Modal } from './modal.model';

import { ModalNotificationService } from '../shared/messages/modal.service';
import { DownloadService } from '@resources/download/download.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'rt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  recuperarSenhaF: FormGroup;
  message: Modal;
  show = false
  url: string = environment.api;
  public url_download;

  constructor(private fb: FormBuilder,
              private mService: ModalNotificationService,
              private resultsService: ResultsService,
              private download: DownloadService) {}

  nameFile;

  ngOnInit() {

    this.mService.notifier.subscribe( message => {
      this.message = message.work;
      console.log(message.work)
      this.show = message.value
    });

    this.recuperarSenhaF = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    });

    setTimeout(() => {
      this.url_download = `${this.url}/work/file/${this.nameFile}`;
    }, 1500)

    this.nameFile = this.resultsService.getWork().file;
  } 

  downloadFile(value) {
    console.log(value)
    
    
    console.log(this.url)
    // this.download.downloadFile(this.nameFile).subscribe(
    //   datas => console.log('datas',datas),
    //   response => console.log(response)
    // );
  }

  pdfWrite() {
    alert(this.nameFile)
    console.log(`${this.url}/${this.nameFile}`)
    window.open(`http://localhost:1234/visualizar/${this.nameFile}`, '_blank');
  }

}
