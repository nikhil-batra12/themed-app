import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from '../../components/admin-products/admin-products.component';


const routes: Routes = [
  {
    path: '',
    component: AdminProductsComponent
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
export class AdminProductsRoutingModule {
}

