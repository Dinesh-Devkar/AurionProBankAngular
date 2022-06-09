import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuard implements CanActivate {
 
  constructor(private authService:AuthUserService,private router:Router){}
  canActivate() {
    if(localStorage.getItem('roll')=="C"){
      alert("Customer Guard Working Properly")
      return true;
    }
    alert("Customer Guard Not Working Properly")
    this.router.navigate(['/landing'])
    return false;
  }
  
}
