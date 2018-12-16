import { Injectable } from "@angular/core";
import { LogoutHttp } from '../http/logout.http';

@Injectable()
export class LogoutService {
    
    constructor(private logoutHttp: LogoutHttp) {}
    
    logout() {
        return this.logoutHttp.get();
    }

}