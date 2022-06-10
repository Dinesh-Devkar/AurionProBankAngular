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
      
      this.customersList=data
      
    })
  }
  ModifyAccountStatus(user:any){
      
      if(user.status=="ACTIVE"){
        user.status="DEACTIVE"
        this.userService.ModifyAccountStatus(user).subscribe(res=>{
          
        })
      }
      else if(user.status=="DEACTIVE"){
        user.status="ACTIVE"
        this.userService.ModifyAccountStatus(user).subscribe(res=>{
          
        })
      }
      
  }

  ngOnInit(): void {
    
  }

}
