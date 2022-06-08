import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  minimumBalance:number=500;
  result:string=''
  registerForm=new FormGroup({
    accountNumber:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{12}|[0-9]{15}$]")]),
    name:new FormControl('',Validators.required),
    balance:new FormControl('',[Validators.required,Validators.min(this.minimumBalance)]),
    password:new FormControl('',Validators.required),
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
  get accountNumber(){
    return this.registerForm.get('acountNumber')
  }

}
