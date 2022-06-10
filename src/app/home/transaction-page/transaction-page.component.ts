import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { IUser } from '../loginform/loginform.component';
import { AuthUserService } from '../services/auth-user.service';
import { TransactionServiceService } from '../services/transaction-service.service';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent implements OnInit {

  loggeInUser:IUser
  transactionStatus:string=''
  transactionForm=new FormGroup({
    amount:new FormControl('',[Validators.required]),
    transactionType:new FormControl('',[Validators.required])
  })
  constructor(private http:TransactionServiceService,private userService:AuthUserService) {
    this.loggeInUser=userService.GetLoggedInUser()
   }

   async DoTransaction(){
    if(this.transactionForm.valid){
      
        this.http.DoTransaction(this.transactionForm.value).subscribe((res:any)=>{
          
        
        this.transactionStatus=res;
        setTimeout(()=>{
          this.transactionStatus=''
        },3000)
        this.transactionForm.controls['amount'].reset()
        this.transactionForm.controls['transactionType'].reset()
        //console.log("TTTTTTTTTTTTTTTTTTTT")
        console.log(res)
      })
      this.userService.UpdateAccountData(this.userService.GetLoggedInUser().id).subscribe((data)=>{
        //this.userService.SetLoggedInUser(data);
        let u:any=data
        console.log(data);
        
        // this.http.RefreshRequired.subscribe(res=>{
        //   this.loggeInUser=this.userService.GetLoggedInUser();
        //   alert("Demo");
        // })
      })
      return;
    }
    this.transactionStatus="All Fields Are Required";
    setTimeout(()=>{
      this.transactionStatus=''
    },5000)
    
  }
  ngOnInit(): void {
  }

}
