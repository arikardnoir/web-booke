import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';

@Injectable()
export class NovaSenhaHttp { 

    constructor(public api: ApiHttp) {}

    post(data) {
        return this.api.post('v2/newpass', data);
    }
}
