import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { StatisticsComponent } from './statistics/statistics.component';
import { RecordsComponent } from './records/records.component';
import { HistoryComponent } from './history/history.component';

import { HistoryChartComponent } from './history/history-chart/history-chart.component';
import { HistoryEventsComponent } from './history/history-events/history-events.component';
import { HistoryDetailComponent } from './history/history-detail/history-detail.component';

import { HistoryEventComponent } from './history/history-event/history-event.component';

import { RecordsService } from '../shared/services/records.service';
import { OrdersService } from '../shared/services/orders.service';
import { BillService } from '../shared/services/bill.service';
import { FilterPipe } from '../shared/pipes/filter.pipe';


@NgModule({
  imports: [CommonModule, SharedModule, SystemRoutingModule],
  declarations: [
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    StatisticsComponent,
    RecordsComponent,
    HistoryComponent,
    HistoryComponent,
    RecordsComponent,
    StatisticsComponent,
    HistoryChartComponent,
    HistoryEventsComponent,
    HistoryDetailComponent,
    HistoryEventComponent,
    FilterPipe
  ],
  providers: [RecordsService, OrdersService, BillService]
})
export class SystemModule {}
