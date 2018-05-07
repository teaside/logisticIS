import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { SystemDeliveryRoutingModule } from './system-delivery-routing.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { StatisticsComponent } from './statistics/statistics.component';

import { HistoryComponent } from './history/history.component';

import { HistoryEventsComponent } from './history/history-events/history-events.component';

import { HistoryEventComponent } from './history/history-event/history-event.component';

import { SystemDeliveryComponent } from './system-delivery.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecordsService } from '../shared/services/records.service';
import { OrdersService } from '../shared/services/orders.service';
import { BillService } from '../shared/services/bill.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SystemDeliveryRoutingModule,
    FormsModule
  ],
  declarations: [
    SystemDeliveryComponent,
    SidebarComponent,
    HeaderComponent,
    StatisticsComponent,
    // RecordsComponent,
    //
    HistoryComponent,
    HistoryEventsComponent,
    HistoryEventComponent
  ],
    providers: [RecordsService, OrdersService, BillService]
},
)
export class SystemDeliveryModule { }
