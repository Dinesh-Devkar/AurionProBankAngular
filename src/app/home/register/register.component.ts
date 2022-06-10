import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=new FormGroup({
    accountNumber:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    balance:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    roll:new FormControl('',[Validators.required])
  })
  
  constructor(private authService:AuthUserService,private router:Router) { }
  RegisterCustomer(){

    if(this.registerForm.valid)
    {
        this.authService.RegisterAccount(this.registerForm.value).subscribe((res:any)=>{
          alert(res);
          
          this.router.navigate(['/landing'])
          return
        })
      }
  
    }
  

  ngOnInit(): void {
  }

}
