import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class NotificationService {

    notifier = new EventEmitter<string>();
    b = new EventEmitter<any>();

    notify(message: any, bool?: any) {
        this.notifier.emit(message);
        this.b.emit(bool);
    }

}
