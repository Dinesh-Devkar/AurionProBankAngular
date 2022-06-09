import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  customersList:{accountNumber:number,name:string,balance:number,status:string,roll:string}[]=[]
  constructor(private userService:AuthUserService) { 
    userService.GetAllAccounts().subscribe((data:any)=>{
      console.log("Heloooooooooooooooooooooooooooooooooo")
      this.customersList=data
      console.log(this.customersList)
    })
  }
  ModifyAccountStatus(user:any){
      alert(user.status+"       "+user.accountNumber)
      if(user.status=="ACTIVE"){
        user.status="DEACTIVE"
        this.userService.ModifyAccountStatus(user).subscribe(res=>{
          alert(res);
        })
      }
      else if(user.status=="DEACTIVE"){
        user.status="ACTIVE"
        this.userService.ModifyAccountStatus(user).subscribe(res=>{
          alert(res);
        })
      }
      
  }

  ngOnInit(): void {
    
  }

}
