import { Injectable } from '@angular/core';
import { ApiHttp } from '@resources/api.http';

@Injectable()
export class ResultsHttp {
    constructor(public api: ApiHttp) {}

    getWorkUni(key_university) {
        const req = this.api.get(`work/key_university=${key_university}`);
        return req;
    }

    getWorkKey(keysearch) {
        const req = this.api.get(`work/searchall?key_search=${keysearch}`);
        return req;
    }

}
