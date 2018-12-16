import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';

@Injectable()
export class WorkHttp { 

    constructor(public api: ApiHttp) {}

    post(data) {
        return this.api.post('v2/work', data);
    }

    // getMe() {
    //     return this.api.get('account/me');
    // }

    // getImage(img) {
    //     return this.api.get(`v2/image/${img}`);
    // }

    // put(id, data) {
    //     return this.api.put(`v2/user/${id}`, data);
    // }
}