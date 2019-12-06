import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuestDashboardComponent } from "./guest-dashboard.component";
import { ContactUsFormComponent } from '../shared/components/contact-us-form/contact-us-form.component';
import { AboutUsInfoComponent } from '../shared/components/about-us-info/about-us-info.component';

const routes: Routes = [
  {
    path: "",
    component: GuestDashboardComponent,
    children: [
      {
        path: "products",
        loadChildren: () =>
          import("./modules/products/products.module").then(m => m.ProductsModule)
      },
      {
        path: "contact",
        component: ContactUsFormComponent
      },
      {
        path: "about-us",
        component: AboutUsInfoComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestDashboardRoutingModule {}
