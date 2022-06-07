import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  d:any
  result:IUser={
    name: "",
    accountNumber:0,
    roll: "",
    isSuccess: false,
    message: "",
    token: ""
  }
  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  userData:{userName:string,password:string}={userName:"",password:""}
  constructor(private auth:AuthUserService) { 
    this.auth.GetAllAccounts().subscribe(data=>{
      this.d=data;
      console.log(data)
    })
  }

  VerifyUser(){
  console.log(this.loginForm.value)
  this.userData=this.loginForm.value
  this.auth.VerifyUser(this.userData).subscribe((res:IUser)=>{
    this.result=res;
    localStorage.setItem('token',this.result.token);
    console.log(res);
  });
  }
  GetData(){
    this.auth.AdminDashboard().subscribe(data=>{
      console.log(data)
    })
  }
  ngOnInit(): void {
  }
}

export interface IUser{
  name: string,
  accountNumber:number,
  roll: string,
  isSuccess: boolean,
  message: string,
  token: string
}