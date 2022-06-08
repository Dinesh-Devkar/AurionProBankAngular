import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercepterService } from './services/token-intercepter.service';
import { AuthUserService } from './services/auth-user.service';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginformComponent,
    RegisterComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    
  ],
  exports:[
    NavbarComponent,
    LoginformComponent,
    RegisterComponent,
  ],
  providers: [AuthUserService]
})
export class HomeModule { }
