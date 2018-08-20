import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';

@Injectable()
export class UserHttp {
    constructor(public api: ApiHttp) {}

    post(data) {
        const req = this.api.post('v2/user', data);
        console.log('http');
        console.log(req);
        return req;
    }
}
