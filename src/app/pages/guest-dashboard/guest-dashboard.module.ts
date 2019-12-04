import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfitCardComponent } from './backups/profit-card/profit-card.component';
import { ECommerceChartsPanelComponent } from './backups/charts-panel/charts-panel.component';
import { OrdersChartComponent } from './backups/charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './backups/charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from './backups/charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './backups/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './backups/profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from './backups/profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from './backups/profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './backups/profit-card/front-side/stats-card-front.component';
import { TrafficRevealCardComponent } from './backups/traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from './backups/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './backups/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './backups/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from './backups/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from './backups/traffic-reveal-card/back-side/traffic-bar-chart.component';
import {
  ECommerceVisitorsAnalyticsComponent,
} from './backups/visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './backups/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './backups/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from './backups/legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from './backups/user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from './backups/progress-section/progress-section.component';
import { SlideOutComponent } from './backups/slide-out/slide-out.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CountryOrdersComponent } from './backups/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from './backups/country-orders/map/country-orders-map.component';
import { CountryOrdersMapService } from './backups/country-orders/map/country-orders-map.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CountryOrdersChartComponent } from './backups/country-orders/chart/country-orders-chart.component';
import { EarningCardComponent } from './backups/earning-card/earning-card.component';
import { EarningCardBackComponent } from './backups/earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from './backups/earning-card/back-side/earning-pie-chart.component';
import { EarningCardFrontComponent } from './backups/earning-card/front-side/earning-card-front.component';
import { EarningLiveUpdateChartComponent } from './backups/earning-card/front-side/earning-live-update-chart.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductLayoutComponent } from '../shared/components/product-layout/product-layout.component';
import { ProductEnquiryFormComponent } from './components/product-enquiry-form/product-enquiry-form.component';
import { ModalOverlaysModule } from '../backup/modal-overlays/modal-overlays.module';

import { GuestDashboardRoutingModule } from './guest-dashboard.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GuestDashboardComponent } from './guest-dashboard.component';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    // ThemeModule,
    // NbCardModule,
    // NbUserModule,
    // NbButtonModule,
    // NbIconModule,
    // NbTabsetModule,
    // NbSelectModule,
    // NbListModule,
    // ChartModule,
    // NbProgressBarModule,
    // NgxEchartsModule,
    // NgxChartsModule,
    // LeafletModule,
    // NgbCarouselModule,
    // ReactiveFormsModule,
    // ModalOverlaysModule,
    GuestDashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    GuestDashboardComponent,
    // SliderComponent,
    // ProductLayoutComponent,
    // ProductCardComponent,
    // ProductEnquiryFormComponent,
  ],
  providers: [
    // CountryOrdersMapService,
  ],
  // entryComponents: [
  //   ProductEnquiryFormComponent
  // ]
})
export class GuestDashboardModule { }
