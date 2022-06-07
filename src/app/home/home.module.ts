import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercepterService } from './services/token-intercepter.service';
import { AuthUserService } from './services/auth-user.service';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports:[
    NavbarComponent,
    LoginformComponent
  ],
  providers: [AuthUserService]
})
export class HomeModule { }
