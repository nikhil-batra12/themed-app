import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserDashboardRoutingModule } from './admin-dashboard.routing.module';

@NgModule({
  declarations: [UserProductsComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
