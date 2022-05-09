import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private httpService: HttpService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean>  | Promise<boolean > {
      const isAuth = this.httpService.getIsAuth()
      if(!isAuth){
        this.router.navigate(['']);
      }
      return isAuth;
  }
}
