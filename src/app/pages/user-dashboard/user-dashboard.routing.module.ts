import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { ContactUsFormComponent } from '../shared/components/contact-us-form/contact-us-form.component';
import { AboutUsInfoComponent } from '../shared/components/about-us-info/about-us-info.component';


const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      {
        path: "products",
        loadChildren: () =>
          import("./modules/user-products/user-products.module").then(m => m.UserProductsModule)
      },
      {
        path: "orders",
        loadChildren: () =>
          import("./modules/customer-orders/customer-orders.module").then(
            m => m.CustomerOrderModule
          )
      },
      {
        path: "contact",
       component: ContactUsFormComponent
      },
      {
        path: "about-us",
        component: AboutUsInfoComponent
      },
      // {
      //   path: "**",
      //   redirectTo: 'products',
      //   pathMatch: 'full'
      // }
    ]
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
export class UserDashboardRoutingModule {
}

