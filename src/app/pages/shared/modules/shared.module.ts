import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsFormComponent } from '../components/contact-us-form/contact-us-form.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { ProductLayoutComponent } from '../components/product-layout/product-layout.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { AboutUsInfoComponent } from '../components/about-us-info/about-us-info.component';

@NgModule({
  declarations: [ContactUsFormComponent,ProductCardComponent,ProductLayoutComponent, AboutUsInfoComponent],
  imports: [CommonModule, ThemeModule],
  exports:[
    ReactiveFormsModule,ContactUsFormComponent,ProductCardComponent,ProductLayoutComponent, AboutUsInfoComponent
  ],
})
export class SharedModule { }
