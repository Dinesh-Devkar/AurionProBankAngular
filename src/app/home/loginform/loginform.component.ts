import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

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
    userName:new FormControl(''),
    password:new FormControl('')
  })
  userData:{userName:string,password:string}={userName:"",password:""}
  constructor(private auth:AuthUserService,private router:Router) { 
    this.auth.GetAllAccounts().subscribe(data=>{
      this.d=data;
      console.log(data)
    })
  }

  VerifyUser(){
  //console.log(this.loginForm.value)
  this.userData=this.loginForm.value
  this.auth.VerifyUser(this.userData).subscribe((res:IUser)=>{
    this.loggedInUser=res;
    
    console.log("My Data  : ",res);
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
  });
  // alert(this.userData.userName+"       "+this.userData.password)
  // if(this.userData.userName=="admin" && this.userData.password=="admin1"){
  //   alert("Login Successfull");
  //   this.router.navigate(['/customerDashboard'])
  // }
  // else{
  //   alert("Login Fail");
  // }
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