import { NgModule } from "@angular/core";
import { NbMenuModule, NbIconModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
// import { DashboardModule } from "./backup/dashboard/dashboard.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./backup/miscellaneous/miscellaneous.module";
import { SharedModule } from './shared/modules/shared.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    // DashboardModule,
    MiscellaneousModule,
    SharedModule
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
