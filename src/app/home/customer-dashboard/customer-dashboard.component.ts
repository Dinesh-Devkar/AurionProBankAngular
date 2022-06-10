import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../loginform/loginform.component';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  @Input() loggedInUser:IUser
  ShowPassbookPage:boolean=true;
  HideBox:boolean=false;
  ShowTransactionPage:boolean=true;
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
  ngOnInit(): void {
    
  }

}
