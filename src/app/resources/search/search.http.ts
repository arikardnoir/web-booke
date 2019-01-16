import { Injectable } from '@angular/core';
import { ApiHttp } from '@resources/api.http';

@Injectable()
export class SearchHttp {
    constructor(public api: ApiHttp) {}

    getAll(keysearch) {
        const req = this.api.get(`work?key_search=${keysearch}`);
        return req;
    }

}
