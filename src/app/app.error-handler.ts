import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationService } from "./shared/messages/notification.service";

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private ns: NotificationService) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        
        if(errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.error.message;

            switch(errorResponse.status) {
                case 401: this.ns.notify(message || '');
                break;
                case 403: this.ns.notify(message || 'Não autorizado');
                break;
                case 404: this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes.');
                break;
            }
        }
        super.handleError(errorResponse)
    }
}