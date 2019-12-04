import { NgModule } from "@angular/core";
import { NbMenuModule, NbIconModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
// import { DashboardModule } from "./backup/dashboard/dashboard.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./backup/miscellaneous/miscellaneous.module";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    // DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
