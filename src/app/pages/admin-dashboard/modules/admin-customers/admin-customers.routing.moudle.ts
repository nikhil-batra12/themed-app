import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCustomersComponent } from '../../components/admin-customers/admin-customers.component';


const routes: Routes = [
  {
    path: '',
    component: AdminCustomersComponent
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
export class AdminCustomersRoutingModule {
}

