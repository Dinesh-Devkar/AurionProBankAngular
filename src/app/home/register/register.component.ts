import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  result:string=''
  registerForm=new FormGroup({
    accountNumber:new FormControl('',[Validators.required]),
    name:new FormControl(''),
    balance:new FormControl(''),
    password:new FormControl(''),
    roll:new FormControl('')
  })
  
  constructor(private authService:AuthUserService) { }
  RegisterCustomer(){
    //console.log(this.registerForm.value)
    //alert(this.registerForm.value)
    if(this.registerForm.valid)
    {
      this.authService.RegisterAccount(this.registerForm.value).subscribe((res:any)=>{
        alert(res);
        this.result=res
      })
    }
  }

  ngOnInit(): void {
  }

}
