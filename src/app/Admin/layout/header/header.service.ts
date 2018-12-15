import { Injectable } from '@angular/core';
import { LogoutService } from '../../../services/logout.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private logoutService: LogoutService) {}

  // logout() {
  //   this.logoutService.logout();
  // }
}
