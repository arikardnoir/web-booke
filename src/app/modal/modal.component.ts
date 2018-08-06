import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from './../shared/messages/notification.service';
import { ModalService } from '../modal/modal.service';
import { ResultsService } from '../FrontEnd/results/results.service';

import { ModalNotificationService } from '../shared/messages/modal.service';

@Component({
  selector: 'rt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  recuperarSenhaF: FormGroup;
  message = {};

  constructor(private fb: FormBuilder,
              private mService: ModalNotificationService,
              private modalService: ModalService,
              private resultsService: ResultsService) {}

  nameFile;
  ngOnInit() {
    this.mService.notifier.subscribe( message => {
      this.message = message;
    });
    this.recuperarSenhaF = this.fb.group({
      recuperar_senha: this.fb.control('', [Validators.required, Validators.email])
    });

    this.nameFile = this.resultsService.getWork().file;
  }

  forget_pass(email) {

    this.modalService.forget_pass(email)
    .subscribe(
      status => console.log(status)
    );

  }

  downloadFile() {
    //console.log(this.nameFile);

    this.modalService.downloadFile(this.nameFile).subscribe(
      datas => datas,
      response => console.log(response.message)
    );

  }

}
