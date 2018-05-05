import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecordsService } from '../shared/services/records.service';
import { Record } from '../shared/models/record.model';

@Component({
  selector: 'hm-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  chartData = [];

  records: Record[] = [];

  constructor(private recordService: RecordsService) { }

  ngOnInit() {
    this.recordService.getRecords()
    .subscribe((data: Record[]) => {
      // console.log(data);

      this.records = data;
      this.calculateChartData();
    });
  }

  calculateChartData(): void {
    this.chartData = [];
    this.records.forEach((rec) => {
      const recEvent = this.records.filter((e) => e.creator === rec.creator);
      this.chartData.push({
        name: rec.date ,
        value: recEvent.reduce((total, e) => {
          total += e.respondedDeliverers.value;
          return total;
        }, 0)
      });
    });

  //   this.chartData = [
  //     {
  //     'name': 'asd',
  //     'value': 300
  //   },
  //   {
  //     'name': 'asd',
  //     'value': 300
  //   },
  //   {
  //     'name': 'asd',
  //     'value': 300
  //   },
  // ];

  }

}
