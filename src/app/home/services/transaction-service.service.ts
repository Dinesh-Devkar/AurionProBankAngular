import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUserService } from './auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private http:HttpClient,private userService:AuthUserService) {

   }

   GetPassbook(){
     let currentUser=this.userService.GetLoggedInUser();
     return this.http.get(`http://localhost:5000/api/v1/Account/${currentUser.id}/Passbook`)
   }

   DoTransaction(transactionValues:{amount:number,transactionType:string}){
    let currentUser=this.userService.GetLoggedInUser();
    return this.http.post(`http://localhost:5000/api/v1/Account/${currentUser.id}/DoTransaction`,transactionValues)
   }
}
