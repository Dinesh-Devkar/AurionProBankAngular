import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http:HttpClient) { }
 

  VerifyUser(user:{userName:string,password:string}):any{
    // if(user.userName=="admin" && user.password=="12345")
    // {
    //   return "Login Successfull";
    // }
    // return "Login Fail";
    console.log("Service method call")
    console.log("User : ",user)
    
    return this.http.post("http://localhost:5000/api/v1/Account/LoginAccount",user);
  }

  GetAllAccounts(){
    return this.http.get("http://localhost:5000/api/v1/Account/GetAllAccounts");
  }

  AdminDashboard(){
    console.log("Inside AdminDashboard Method");
    return this.http.get("http://localhost:5000/api/v1/Account/Admin");
  }
}
