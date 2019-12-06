import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCouponssRoutingModule } from './admin-coupons.routing.module';
import { AdminCouponsComponent } from '../../components/admin-coupons/admin-coupons.component';

@NgModule({
  declarations: [AdminCouponsComponent],
  imports: [
    CommonModule,
    AdminCouponssRoutingModule
  ]
})
export class AdminCouponsModule { }
