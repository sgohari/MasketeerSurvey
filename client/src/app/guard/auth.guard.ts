import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor( private authService: AuthService,
    private router: Router){}

  canActivate(): boolean
      {
        if(this.authService.loggedIn()){
          return true;
        }else {
          this.router.navigate(['login']);
          return false;
        }
    return true;
  }

}
