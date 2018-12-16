import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    if (this.loginService.userIsAutenticade()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

//   canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
//     if (this.authService.usuarioEstaAutenticado()) {
//       return true;
//     }
//   }
}
