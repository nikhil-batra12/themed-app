import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOrdersTableComponent } from '../../components/customer-orders-table/customer-orders-table.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerOrdersTableComponent
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
export class CustomerOrderRoutingModule {
}

