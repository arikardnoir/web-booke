import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter, AfterContentChecked } from '@angular/core';
import { NotificationService } from '../../shared/messages/notification.service';

@Component({
  selector: 'rt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterContentChecked {

  mudouValor = new EventEmitter();
  pageLogin = false;
  public loading = false;
  constructor(private route: ActivatedRoute, private notificationService: NotificationService) { }

  ngOnInit() {
    // if (this.route.url.value[0].path.includes('login')) {
    //   this.pageLogin = true;
    //   this.mudouValor.emit({novoValor: this.pageLogin});
    // }
  }

  ngAfterContentChecked() {
    this.notificationService.b.subscribe(b => {
      this.loading = b;
    });
  }

}
