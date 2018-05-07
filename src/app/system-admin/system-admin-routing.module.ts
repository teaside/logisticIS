import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { SystemAdminModule } from './system-admin.module';
import { SystemAdminComponent } from './system-admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
// import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  {path: 'system-admin', component: SystemAdminComponent, children: [
    {path: 'statistics', component: StatisticsComponent},
    {path: 'analytics', component: AnalyticsComponent}
    // {path: 'records', component: RecordsComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAdminRoutingModule {}
