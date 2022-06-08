import { Component, OnInit } from '@angular/core';
import { IUser } from '../loginform/loginform.component';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  loggedInUser:IUser
  ShowPassbookPage:boolean=true;
  HideBox:boolean=false;
  ShowTransactionPage:boolean=true;
  ShowCustomersPage:boolean=true;
  constructor(private authService:AuthUserService) {
    this.loggedInUser=authService.GetLoggedInUser();
   }
  ShowPassbook(){

    this.HideBox=!this.HideBox
    this.ShowPassbookPage=!this.ShowPassbookPage;
  }
  ShowTransaction(){
    this.HideBox=!this.HideBox
    this.ShowTransactionPage=!this.ShowTransactionPage
  }
  ShowCustomers(){
    this.HideBox=!this.HideBox
    this.ShowCustomersPage=!this.ShowCustomersPage
  }

  ngOnInit(): void {
  }

}
