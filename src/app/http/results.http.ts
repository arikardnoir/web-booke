import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';

@Injectable()
export class ResultsHttp {
    constructor(public api: ApiHttp) {}

    getWorkUni(key_university) {
        const req = this.api.get(`v2/workout/searchall?key_university=${key_university}`);
        return req;
    }

    getWorkKey(keysearch) {
        const req = this.api.get(`v2/workout/searchall?key_search=${keysearch}`);
        return req;
    }

}
