import { Injectable } from '@angular/core';
import { ApiHttp } from '@resources/api.http';

@Injectable()
export class DownloadHttp { 

    constructor(public api: ApiHttp) {}

    download(fileName) {
        console.log(fileName)
        return this.api.get(`work/file/${fileName}`);
    }
}