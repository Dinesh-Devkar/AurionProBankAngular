import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthUserService,private router:Router){

  }
  canActivate(){
    if(this.authService.IsLoggedIn()){
      
      
      return true;
    }
    this.router.navigate(['/landing'])
    return false;
    
  }
  
}
