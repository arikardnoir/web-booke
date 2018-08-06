import { Observable, timer } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from '../notification.service';
import { tap, switchMap} from 'rxjs/operators';



@Component({
  selector: 'rt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  // animations: [
  //   trigger('snack-visibility', [
  //     state('hidden', style({opacity: 0, bottoM: 0})),
  //     state('visible', style({opacity: 1, bottom: '30px'})),
  //     transition('hidden => visible', animate('300ms 0s ease-in')),
  //     transition('visible => hidden', animate('500ms 0s ease-out'))
  //   ])
  // ]
})
export class SnackbarComponent implements OnInit {

  snackVisibility = 'hidden';
  message: string;
  bool: boolean;
  constructor(private notificationService: NotificationService) { }

  public show;
  getValueB;
  ngOnInit() {
    // this.notificationService.notifier
    // .pipe(tap(message => {
    //   this.message = message;
    //   this.snackVisibility = 'visible';
    // }))
    // .subscribe( () => this.snackVisibility = 'hidden');
    this.notificationService.b.subscribe((b) => this.getValueB = b);

    this.notificationService.notifier.subscribe(
      message => {
        if (message !== '') {
          this.getValueB = '';
          this.show = true;
          setTimeout(() => this.show = false, 2500);
        }
        this.message = message;
      }
    );
  }

}
