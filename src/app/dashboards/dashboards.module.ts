import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardsModule { }
