import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from '../../components/admin-orders/admin-orders.component';


const routes: Routes = [
  {
    path: '',
    component: AdminOrdersComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AdminOrdersRoutingModule {
}

