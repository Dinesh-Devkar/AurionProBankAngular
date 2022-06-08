import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../loginform/loginform.component';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.component.html',
  styleUrls: ['./accounts-details.component.css']
})
export class AccountsDetailsComponent implements OnInit {

  loggedInUser:any
  constructor(private userService:AuthUserService) {
    this.loggedInUser=this.userService.GetLoggedInUser();
    
   }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.loggedInUser=this.userService.GetLoggedInUser();
    //   //alert("Demo");
    // },1000)
  }

}
