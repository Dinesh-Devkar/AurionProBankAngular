import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ShowLogInLogOutBtn:boolean=true
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LogOut(){
    localStorage.clear();
this.router.navigate(['/landing'])
  }
  ToggleButton(){
    this.ShowLogInLogOutBtn=!this.ShowLogInLogOutBtn
  }

}
