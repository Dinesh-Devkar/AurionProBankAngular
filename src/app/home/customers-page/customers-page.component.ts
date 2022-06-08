import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  customersList:{accountNumber:number,name:string,balance:number}[]=[]
  constructor(private userService:AuthUserService) { 
    userService.GetAllAccounts().subscribe((data:any)=>{
      this.customersList=data
    })
  }

  ngOnInit(): void {
  }

}
