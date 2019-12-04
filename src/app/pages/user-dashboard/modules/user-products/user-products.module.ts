import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/modules/shared.module';
import { NbDialogModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme/theme.module';
import { UserProductRoutingModule } from './user-products.routing.module';
import { UserProductsComponent } from '../../components/user-products/user-products.component';

@NgModule({
  declarations: [UserProductsComponent],
  imports: [
    CommonModule,
    UserProductRoutingModule,
    NgbCarouselModule,
    ThemeModule,
    SharedModule,
    NbDialogModule.forRoot()
  ],
  entryComponents: [
  ]
})
export class UserProductsModule { }
