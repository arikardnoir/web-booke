import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class ModalNotificationService {

    notifier = new EventEmitter<string>();

    notify(message: any) {
        this.notifier.emit(message);
    }
}
