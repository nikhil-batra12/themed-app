import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsInfoComponent } from './about-us-info/about-us-info.component';


const routes: Routes = [
  {
    path: '',
    component: AboutUsInfoComponent
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
export class AboutUsRoutingModule {
}

