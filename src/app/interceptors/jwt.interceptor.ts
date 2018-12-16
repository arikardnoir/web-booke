import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { LoginService } from '../services/login.service';


@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(private _injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this._injector.get(LoginService);

        if (loginService.userIsAutenticade()) {
            const authRequest = request.clone(
                {setHeaders: {'Authorization': `Bearer ${loginService.getToken().token}`}}
            );
            return next.handle(authRequest);
        }
        return  next.handle(request);
    }
}
