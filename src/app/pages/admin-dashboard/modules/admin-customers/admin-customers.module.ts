import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCustomersRoutingModule } from './admin-customers.routing.moudle';
import { AdminCustomersComponent } from '../../components/admin-customers/admin-customers.component';
import { ManageCustomerComponent } from '../../components/admin-customers/manage-customer/manage-customer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [AdminCustomersComponent, ManageCustomerComponent],
  imports: [
    CommonModule,
    AdminCustomersRoutingModule,
    Ng2SmartTableModule,
    ThemeModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot()
  ],
  entryComponents: [ManageCustomerComponent]
})
export class AdminCustomersModule { }
