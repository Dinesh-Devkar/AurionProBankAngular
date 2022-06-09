import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService:AuthUserService,private router:Router){

  }
  canActivate() {
    if(this.authService.GetLoggedInUser().roll=="A"){
      alert("Admin Guard Working Properly")
      return true;
    }
    alert("Admin Guard Not Working Properly")
    this.router.navigate(['/landing'])
    return false;
    
  }
  
}
