import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../shared/messages/notification.service';
import { ResultsService } from '../services/results.service';
import { Modal } from './modal.model';

import { ModalNotificationService } from '../shared/messages/modal.service';
import { ForgetDownloadService } from '../services/forget_download.service';

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
              private forgetdownload: ForgetDownloadService) {}

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

  forget_pass(email) {

    this.forgetdownload.forget_pass(email)
    .subscribe(
      status => console.log(status)
    );

  }

  downloadFile() {
    this.forgetdownload.downloadFile(this.nameFile).subscribe(
      datas => datas,
      response => console.log(response.message)
    );
  }

}
