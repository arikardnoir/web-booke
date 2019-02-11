import { Injectable } from '@angular/core';
import { ApiHttp } from '@resources/api.http';

@Injectable()
export class ResultsHttp {
    constructor(public api: ApiHttp) {}

    getWorkFilter(university_search?, keyword_search?) {
        const req = this.api.get(`work?university_search=${university_search}&keyword_search=${keyword_search}`);
        return req;
    }

    getUniversity() {
        const req = this.api.get('university');
        return req;
    }


    //work?key_search=${keysearch}

}
