import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './home/customer-dashboard/customer-dashboard.component';
import { LandingComponent } from './home/landing/landing.component';
import {RegisterComponent} from './home/register/register.component';

const routes: Routes = [{path:"register",component:RegisterComponent},
                        {path:"landing",component:LandingComponent},
                        {path:"",component:LandingComponent},
                        {path:"customerDashboard",component:CustomerDashboardComponent},
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
