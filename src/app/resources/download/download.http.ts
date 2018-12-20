import { Injectable } from '@angular/core';
import { ApiHttp } from '@resources/api.http';

@Injectable()
export class DownloadHttp { 

    constructor(public api: ApiHttp) {}

    download(data) {
        return this.api.post('v2/workout/file/', data);
    }
}