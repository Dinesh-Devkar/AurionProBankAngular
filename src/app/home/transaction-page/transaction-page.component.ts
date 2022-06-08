import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { TransactionServiceService } from '../services/transaction-service.service';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent implements OnInit {

  transactionForm=new FormGroup({
    amount:new FormControl('',[Validators.required]),
    transactionType:new FormControl('',[Validators.required])
  })
  constructor(private http:TransactionServiceService) { }

  DoTransaction(){
    if(this.transactionForm.valid){
      alert(this.transactionForm.value.amount+"     "+this.transactionForm.value.transactionType)
      this.http.DoTransaction(this.transactionForm.value).subscribe(res=>{
        alert(res)
        return
      })
    }
    alert("All Fields Are required")
    
  }
  ngOnInit(): void {
  }

}
