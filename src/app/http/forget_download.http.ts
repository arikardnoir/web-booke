import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';

@Injectable()
export class ForgetDownloadHttp { 

    constructor(public api: ApiHttp) {}

    forgetpass(data) {
        return this.api.post('account/forgetpass', data);
    }

    download(data) {
        return this.api.post('v2/workout/file/', data);
    }
}