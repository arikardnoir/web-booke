import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class NotificationService {

    notifier = new EventEmitter<string>();
    b = new EventEmitter<any>();

    notify(message: any, bool?: any) {

        if(typeof(message) == 'object') {
            this.notifier.emit(message.message);
            return;
        }

        this.notifier.emit(message);
        this.b.emit(bool);
    }

}
