import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from '../services/auth-user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ShowLogInLogOutBtn: boolean = true
  constructor(private router: Router,private authService:AuthUserService) { }

  ngOnInit(): void {
    this.authService.RefreshRequired.subscribe(res=>{
      
        this.ToggleButton();
      })
      
  }
  LogOut() {
    localStorage.clear();
    this.ToggleButton()
    this.router.navigate(['/landing']);

  }
  ToggleButton() {
    this.ShowLogInLogOutBtn = !this.ShowLogInLogOutBtn
  }

}
