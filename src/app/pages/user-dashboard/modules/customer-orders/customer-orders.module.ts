import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOrderRoutingModule } from './customer-orders.routing.module';
import { CustomerOrdersTableComponent } from '../../components/customer-orders-table/customer-orders-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [
    CustomerOrdersTableComponent
  ],
  imports: [
    CustomerOrderRoutingModule,
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule, 
    NbIconModule
  ]
})
export class CustomerOrderModule { }
