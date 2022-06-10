import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  loginFail:string=''
  d:any
  loggedInUser:IUser={
    id:0,
    name: "",
    accountNumber:0,
    roll: "",
    isSuccess: false,
    message: "",
    balance:0,
    status:'',
    token: ""
  }
  loginForm=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  userData:{userName:string,password:string}={userName:"",password:""}
  constructor(private auth:AuthUserService,private router:Router) { 
    this.auth.GetAllAccounts().subscribe(data=>{
      this.d=data;
    })
  }

  VerifyUser(){
  //console.log(this.loginForm.value)
  this.userData=this.loginForm.value
  this.auth.VerifyUser(this.userData).subscribe((res:IUser)=>{
    this.loggedInUser=res;
    this.auth.SetLoggedInUser(res);
    if(this.loggedInUser.status=="ACTIVE"){
      localStorage.setItem('token',this.loggedInUser.token);
      this.auth.SetLoggedInUser(res);
      if(this.loggedInUser.roll=="C"){
        this.router.navigate(['/customerDashboard']);
      }
      else if(this.loggedInUser.roll=="A"){
        this.router.navigate(['/adminDashboard']);
      }
    }
    else if(this.loggedInUser.status=="DEACTIVE"){
      this.router.navigate(['/accountDeactive'])
    }
    else if(!this.loggedInUser.isSuccess){
      this.loginFail=this.loggedInUser.message
      this.auth.VerifyUser(this.userData).subscribe((response:any)=>{

      })
    }
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
  id:number,
  name: string,
  accountNumber:number,
  roll: string,
  isSuccess: boolean,
  message: string,
  balance:number,
  status:string,
  token: string
}