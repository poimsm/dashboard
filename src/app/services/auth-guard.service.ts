import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private _auth: AuthService) { }
  
  canActivate() {
    if (this._auth.isAuth) {
      return true;
    } else {
      return false;
    }
  }
}
