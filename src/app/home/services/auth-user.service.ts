import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { IUser } from '../loginform/loginform.component';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  loggedInUser:IUser={
    id:0,
    name: "",
    accountNumber:0,
    roll: "",
    isSuccess: false,
    message: "",
    balance:0,
    token: ""
  }
  constructor(private http:HttpClient) { }
  // private _refreshrequired=new Subject<void>();
  // get RefreshRequired(){
  //   return this._refreshrequired;
  // }
 
  RegisterAccount(account:{
    accountNumber: number,
    name: string,
    balance: number,
    roll: string,
    password: string
  }){
    return this.http.post("http://localhost:5000/api/v1/Account/AddAccount",account);
  }

  VerifyUser(user:{userName:string,password:string}):any{
    // if(user.userName=="admin" && user.password=="12345")
    // {
    //   return "Login Successfull";
    // }
    // return "Login Fail";
    console.log("Service method call")
    console.log("User : ",user)
    console.log(user.userName+"     "+user.password)
    
    return this.http.post("http://localhost:5000/api/v1/Account/LoginAccount",user);
  }

  GetAllAccounts(){
    return this.http.get("http://localhost:5000/api/v1/Account/GetAllAccounts");
  }

  AdminDashboard(){
    console.log("Inside AdminDashboard Method");
    return this.http.get("http://localhost:5000/api/v1/Account/Admin");
  }
  GetLoggedInUser():IUser{
    return this.loggedInUser
  }
  SetLoggedInUser(user:IUser):void{
    this.loggedInUser=user
  }
  UpdateAccountData(accountId:number){
    return this.http.get(`http://localhost:5000/api/v1/Account/${accountId}/GetAccount`)
  }
  SetBalance(amount:number){
     this.loggedInUser.balance+=amount
  }
}
