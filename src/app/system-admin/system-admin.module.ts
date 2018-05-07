import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemAdminComponent } from './system-admin.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { Bill } from '../shared/models/bill.model';
import { BillService } from '../shared/services/bill.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SystemAdminRoutingModule
  ],
  declarations: [
    SystemAdminComponent,
    StatisticsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: [ BillService ]
})
export class SystemAdminModule { }
