import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './backup/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./guest-dashboard/guest-dashboard.module')
        .then(m => m.GuestDashboardModule),
    },
    {
      path: 'user-dashboard',
      loadChildren: () => import('./user-dashboard/user-dashboard.module')
        .then(m => m.UserDashboardModule),
    },
    {
      path: 'admin-dashboard',
      loadChildren: () => import('./admin-dashboard/admin-dashboard.module')
        .then(m => m.AdminDashboardModule),
    },
    // {
    //   path: 'iot-dashboard',
    //   component: DashboardComponent,
    // },
    // {
    //   path: 'layout',
    //   loadChildren: () => import('./backup/layout/layout.module')
    //     .then(m => m.LayoutModule),
    // },
    // {
    //   path: 'forms',
    //   loadChildren: () => import('./backup/forms/forms.module')
    //     .then(m => m.FormsModule),
    // },
    // {
    //   path: 'ui-features',
    //   loadChildren: () => import('./backup/ui-features/ui-features.module')
    //     .then(m => m.UiFeaturesModule),
    // },
    // {
    //   path: 'modal-overlays',
    //   loadChildren: () => import('./backup/modal-overlays/modal-overlays.module')
    //     .then(m => m.ModalOverlaysModule),
    // },
    // {
    //   path: 'extra-components',
    //   loadChildren: () => import('./backup/extra-components/extra-components.module')
    //     .then(m => m.ExtraComponentsModule),
    // },
    // {
    //   path: 'maps',
    //   loadChildren: () => import('./backup/maps/maps.module')
    //     .then(m => m.MapsModule),
    // },
    // {
    //   path: 'charts',
    //   loadChildren: () => import('./backup/charts/charts.module')
    //     .then(m => m.ChartsModule),
    // },
    // {
    //   path: 'editors',
    //   loadChildren: () => import('./backup/editors/editors.module')
    //     .then(m => m.EditorsModule),
    // },
    // {
    //   path: 'tables',
    //   loadChildren: () => import('./backup/tables/tables.module')
    //     .then(m => m.TablesModule),
    // },
    // {
    //   path: 'miscellaneous',
    //   loadChildren: () => import('./backup/miscellaneous/miscellaneous.module')
    //     .then(m => m.MiscellaneousModule),
    // },
    // {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
    // },
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
