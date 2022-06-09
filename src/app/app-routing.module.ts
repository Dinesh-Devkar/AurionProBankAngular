import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './home/customer-dashboard/customer-dashboard.component';
import { LandingComponent } from './home/landing/landing.component';
import { LoginformComponent } from './home/loginform/loginform.component';
import {RegisterComponent} from './home/register/register.component';

const routes: Routes = [{path:"register",component:RegisterComponent},
                        {path:"landing",component:LandingComponent},
                        {path:"",component:LandingComponent},
                        {path:"customerDashboard",component:CustomerDashboardComponent},
                        {path:"adminDashboard",component:AdminDashboardComponent},
                        {path:"login",component:LoginformComponent}

                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
