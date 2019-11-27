import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';


const routes: Routes = [
  {
    path: '',
    component: ContactUsFormComponent
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
export class ContactUsRoutingModule {
}

