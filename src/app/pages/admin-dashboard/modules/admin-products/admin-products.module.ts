import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsRoutingModule } from './admin-products.routing.module';
import { AdminProductsComponent } from '../../components/admin-products/admin-products.component';
import { AdminProductCardComponent } from '../../components/admin-products/admin-product-card/admin-product-card.component';
import { ThemeModule } from '../../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NbDialogModule } from '@nebular/theme';
import { ManageProductComponent } from '../../components/admin-products/manage-product/manage-product.component';

@NgModule({
  declarations: [AdminProductsComponent, AdminProductCardComponent, ManageProductComponent],
  imports: [
    CommonModule,
    AdminProductsRoutingModule,
    ThemeModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot()
  ],
  entryComponents: [ManageProductComponent]
})
export class AdminProductsModule { }
