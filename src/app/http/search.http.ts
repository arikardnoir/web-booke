import { Injectable } from '@angular/core';
import { ApiHttp } from './api.http';

@Injectable()
export class SearchHttp {
    constructor(public api: ApiHttp) {}

    getAll(keysearch) {
        const req = this.api.get(`v2/workout/search?key_search=${keysearch}`);
        return req;
    }

    getName(keysearch) {
        const req = this.api.get(`v2/workout/search/name?key_search=${keysearch}`);
        return req;
    }

    getDescription(keysearch) {
        const req = this.api.get(`v2/workout/search/description?key_search=${keysearch}`);
        return req;
    }
}
