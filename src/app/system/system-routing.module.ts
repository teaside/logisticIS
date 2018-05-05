import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RecordsComponent } from './records/records.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
    {path: 'statistics', component: StatisticsComponent},
    {path: 'records', component: RecordsComponent},
    {path: 'history', component: HistoryComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
