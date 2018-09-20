import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';

@Injectable()
export class PerfilHttp { 

    constructor(public api: ApiHttp) {}

    // post(data, token) {
    //     return this.api.post('account/recpass', data);
    // }

    getMe() {
        return this.api.get('account/me');
    }

    getImage(img) {
        return this.api.get(`v2/image/${img}`);
    }

    put(id, data) {
        return this.api.put(`v2/user/${id}`, data);
    }
}
