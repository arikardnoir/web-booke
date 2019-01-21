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

      setTimeout(() => {
        this.url_download = `${this.url}/work/file/${this.message['initials']}/${this.message['file']}`;
      }, 1500)
      
      this.show = message.value
    });

    this.recuperarSenhaF = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    });

    this.nameFile = this.resultsService.getWork().file;
  } 

  downloadFile() {
    
    
    console.log(this.url)
    this.download.downloadFile(this.nameFile).subscribe(
      datas => console.log('datas',datas),
      response => console.log(response)
    );
  }

  pdfWrite() {
    window.open(`https://drive.google.com/viewerng/viewer?embedded=true&url=${this.url}/work/view/${this.message['initials']}/${this.message['file']}`, '_blank')
  }

}
