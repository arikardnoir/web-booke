import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';

@Injectable()
export class RecuperarHttp { 

    constructor(public api: ApiHttp) {}

    post(data, token) {
        return this.api.post('account/recpass', data);
    }
}
