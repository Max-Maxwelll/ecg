import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  isLoggedIn:boolean = false;

  constructor(private userService: UserService){

  }

  ngOnInit(){
    this.userService.isLoggedIn()
    .subscribe(res => {
      if(res == "true"){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    this.userService.isLoggedIn()
    .subscribe(res => {
      if(res == "true"){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    });
    return this.isLoggedIn;
  }
}
