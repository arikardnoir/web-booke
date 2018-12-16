import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';

@Injectable()
export class LogoutHttp { 

    constructor(public api: ApiHttp) {}

    get() {
        return this.api.get('account/logout');
    }
}
