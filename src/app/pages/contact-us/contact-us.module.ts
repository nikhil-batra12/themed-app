import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ContactUsRoutingModule } from './contact-us.routing.module';
import {
  NbCardModule,
  NbInputModule,
  NbButtonModule
} from '@nebular/theme';

@NgModule({
  declarations: [ContactUsFormComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class ContactUsModule { }
