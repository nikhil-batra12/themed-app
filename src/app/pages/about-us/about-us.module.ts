import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsInfoComponent } from './about-us-info/about-us-info.component';
import { AboutUsRoutingModule } from './about-us.routing.module';
import {
  NbCardModule,
  NbInputModule,
  NbButtonModule
} from '@nebular/theme';

@NgModule({
  declarations: [
    AboutUsInfoComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class AboutUsModule { }
