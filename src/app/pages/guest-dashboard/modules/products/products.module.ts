import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './products.routing.module';
import { ProductsComponent } from '../../components/products/products.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { ProductEnquiryFormComponent } from '../../components/product-enquiry-form/product-enquiry-form.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/modules/shared.module';
import { NbDialogModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';

@NgModule({
  declarations: [ProductsComponent, SliderComponent, ProductEnquiryFormComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgbCarouselModule,
    ThemeModule,
    SharedModule,
    NbDialogModule.forRoot()
  ],
  entryComponents: [
    ProductEnquiryFormComponent
  ]
})
export class ProductsModule { }
