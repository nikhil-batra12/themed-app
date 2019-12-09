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
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@NgModule({
  declarations: [ProductsComponent, SliderComponent, ProductEnquiryFormComponent, CarouselComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgbCarouselModule,
    ThemeModule,
    SharedModule,
    NbDialogModule.forRoot(),
    CarouselModule
  ],
  entryComponents: [
    ProductEnquiryFormComponent
  ]
})
export class ProductsModule { }
