import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminOrdersRoutingModule } from "./admin-orders.routing.module";
import { AdminOrdersComponent } from "../../components/admin-orders/admin-orders.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../../../../@theme/theme.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ManageOrderComponent } from "../../components/admin-orders/manage-order/manage-order.component";
import { NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [AdminOrdersComponent, ManageOrderComponent],
  imports: [
    CommonModule,
    AdminOrdersRoutingModule,
    Ng2SmartTableModule,
    ThemeModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot()
  ],
  entryComponents: [ManageOrderComponent]
})
export class AdminOrdersModule {}
