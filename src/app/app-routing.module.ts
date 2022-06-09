import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './home/customer-dashboard/customer-dashboard.component';
import { DeactiveAccountPageComponent } from './home/deactive-account-page/deactive-account-page.component';
import { LandingComponent } from './home/landing/landing.component';
import { LoginformComponent } from './home/loginform/loginform.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import {RegisterComponent} from './home/register/register.component';
import { AdminAuthGuard } from './home/shared/admin-auth.guard';
import { AuthGuard } from './home/shared/auth.guard';
import { CustomerAuthGuard } from './home/shared/customer-auth.guard';

const routes: Routes = [{path:"register",component:RegisterComponent},
                        {path:"landing",component:LandingComponent},
                        {path:"",component:LandingComponent},
                        {path:"customerDashboard",component:CustomerDashboardComponent,canActivate:[AuthGuard]},
                        {path:"adminDashboard",component:AdminDashboardComponent,canActivate:[AuthGuard]},
                        {path:"login",component:LoginformComponent},
                        
                        {path:"accountDeactive",component:DeactiveAccountPageComponent} ,
                        {path:"**",component:PageNotFoundComponent}                   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
