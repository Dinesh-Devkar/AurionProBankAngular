import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';
import { TransactionServiceService } from '../services/transaction-service.service';

@Component({
  selector: 'app-passbook-page',
  templateUrl: './passbook-page.component.html',
  styleUrls: ['./passbook-page.component.css']
})
export class PassbookPageComponent implements OnInit {

  transactionsList:any
  constructor(private http:TransactionServiceService,private authService:AuthUserService) {
    console.log("Total Transactions : ")
    this.http.GetPassbook().subscribe((res)=>{
      console.log(res)
      this.transactionsList=res;
    })
   }

  GetPassBook(){
    console.log("Total Transactions : ")
    this.http.GetPassbook().subscribe(res=>{
      console.log(res)
    })
  }
  ngOnInit(): void {
    this.http.RefreshRequired.subscribe(res=>{
      this.authService.GetPassbook().subscribe((res)=>{
        console.log(res)
        this.transactionsList=res;
      })
      
    })
  }

}

export interface ITransaction{
  name:string,
  balance:number,
  accountId:number,
  id:number,
  transactionDate: string,
  transactionType: string
}
