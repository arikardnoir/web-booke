import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResultsService } from '@resources/results/results.service';
import { Modal } from './modal.model';

import { ModalNotificationService } from '../shared/messages/modal.service';
import { DownloadService } from '@resources/download/download.service';

@Component({
  selector: 'rt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  recuperarSenhaF: FormGroup;
  message: Modal;
  show = false

  constructor(private fb: FormBuilder,
              private mService: ModalNotificationService,
              private resultsService: ResultsService,
              private download: DownloadService) {}

  nameFile;

  ngOnInit() {

    this.mService.notifier.subscribe( message => {
      this.message = message.work;
      this.show = message.value
    });

    this.recuperarSenhaF = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    });

    this.nameFile = this.resultsService.getWork().file;
  } 

  downloadFile() {
    this.download.downloadFile(this.nameFile).subscribe(
      datas => datas,
      response => console.log(response.message)
    );
  }

}
