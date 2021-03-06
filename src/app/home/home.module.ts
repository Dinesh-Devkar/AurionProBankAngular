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
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { PassbookPageComponent } from './passbook-page/passbook-page.component';
import { AccountsDetailsComponent } from './accounts-details/accounts-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeactivateAccountComponent } from './deactivate-account/deactivate-account.component';




@NgModule({
  declarations: [
    NavbarComponent,
    LoginformComponent,
    RegisterComponent,
    LandingComponent,
    CustomerDashboardComponent,
    TransactionPageComponent,
    PassbookPageComponent,
    AccountsDetailsComponent,
    AdminDashboardComponent,
    CustomersPageComponent,
    ContactComponent,
    PageNotFoundComponent,
    DeactivateAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    SlickCarouselModule,
   
    
  ],
  exports:[
    NavbarComponent,
    LoginformComponent,
    RegisterComponent,
  ],
  providers: [AuthUserService]
})
export class HomeModule { }
