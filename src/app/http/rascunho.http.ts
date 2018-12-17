import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';
import { LoginService } from '../services/login.service';

@Injectable()
export class RascunhoHttp { 

    constructor(public api: ApiHttp) {}

    get(id) {
        return this.api.get(`v2/workout/myWorks/${id}`);
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