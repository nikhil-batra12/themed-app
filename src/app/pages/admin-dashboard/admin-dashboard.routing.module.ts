import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ContactUsFormComponent } from '../shared/components/contact-us-form/contact-us-form.component';
import { AboutUsInfoComponent } from '../shared/components/about-us-info/about-us-info.component';

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
    children: [
      {
        path: "products",
        loadChildren: () =>
          import("./modules/admin-products/admin-products.module").then(m => m.AdminProductsModule)
      },
      {
        path: "orders",
        loadChildren: () =>
          import("./modules/admin-orders/admin-orders.module").then(
            m => m.AdminOrdersModule
          )
      },
      {
        path: "customers",
        loadChildren: () =>
          import("./modules/admin-customers/admin-customers.module").then(
            m => m.AdminCustomersModule
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
      {
        path: "",
        redirectTo: 'products',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {
}
