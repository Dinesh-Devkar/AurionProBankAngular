import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './home/contact/contact.component';
import { CustomerDashboardComponent } from './home/customer-dashboard/customer-dashboard.component';
import { DeactivateAccountComponent } from './home/deactivate-account/deactivate-account.component';
import { LandingComponent } from './home/landing/landing.component';
import { LoginformComponent } from './home/loginform/loginform.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import {RegisterComponent} from './home/register/register.component';

const routes: Routes = [{path:"register",component:RegisterComponent},
                        {path:"landing",component:LandingComponent},
                        {path:"",component:LandingComponent},
                        {path:"customerDashboard",component:CustomerDashboardComponent},
                        {path:"adminDashboard",component:AdminDashboardComponent},
                        {path:"login",component:LoginformComponent},
                        {path:"contact",component:ContactComponent},
                        {path:"notfound",component:PageNotFoundComponent},
                        {path:"deactivate",component:DeactivateAccountComponent}

                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
