import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import {map, tap} from 'rxjs/operators'

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
     ): boolean | Promise<boolean> | Observable<boolean>

  {

   return this.authService.user.pipe(map(user => {
     return !!user
   }), tap(isauth =>{
     if(!isauth){
      this.router.navigate(['/auth'])
     }
   }));

  }

}
