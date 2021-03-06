import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../loginform/loginform.component';
import { AuthUserService } from '../services/auth-user.service';
import { TransactionServiceService } from '../services/transaction-service.service';

@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.component.html',
  styleUrls: ['./accounts-details.component.css']
})
export class AccountsDetailsComponent implements OnInit {

  loggedInUser:any
  result:any
  constructor(private userService:AuthUserService,private transactionService:TransactionServiceService) {
    this.loggedInUser=this.userService.GetLoggedInUser();
   }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.loggedInUser=this.userService.GetLoggedInUser();
    //   //alert("Demo");
    // },1000)
    this.transactionService.RefreshRequired.subscribe(res=>{
      alert("Subscribe Transaction : ")
      // this.loggedInUser=this.userService.GetLoggedInUser();
      // alert(this.loggedInUser.name+"         "+this.loggedInUser.balance);
      alert("Logged In User Id : "+this.loggedInUser.id)
      alert(this.loggedInUser.accountId);
      this.result=this.userService.UpdateAccountData(4).subscribe(data=>{
          alert("Updated Data")
          alert(data)
          this.loggedInUser=data
          console.log(data);
      })
      
    })
  }

}
