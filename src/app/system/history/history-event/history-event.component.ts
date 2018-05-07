import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Record } from '../../../shared/models/record.model';
import { Order } from '../../../shared/models/order.model';
import { Bill } from '../../../shared/models/bill.model';
import { RecordsService } from '../../../shared/services/records.service';
import { OrdersService } from '../../../shared/services/orders.service';
import { BillService } from '../../../shared/services/bill.service';


@Component({
  selector: 'hm-history-event',
  templateUrl: './history-event.component.html',
  styleUrls: ['./history-event.component.scss']
})
export class HistoryEventComponent implements OnInit {

  id: string;
  record: Record = new Record('', '', '', '', '', '', '', '', [new Order('', '', 0)], 0);
  orders: any;
  isOrdersAdded = false;
  isLoaded = false;

  value = 0;
  precent = 0;

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordsService,
    private orderService: OrdersService,
    private billService: BillService) { }

  ngOnInit() {
    this.isLoaded = false;
    this.record = new Record('', '', '', '', '', '', '', '',  [new Order('', '', 0)], 0);
    this.id = this.route.snapshot.params['id'];
    this.recordService.getRecordById(this.id)
    .subscribe((data) => {
        if (data.respondedDeliverers[0].deliverer.indexOf('') !== -1) {
          this.isOrdersAdded = true;
          this.orders = data.respondedDeliverers;
        }
      this.record = data;
    });
    this.isLoaded = true;
  }

  chooseDeliverer(deliverer: string) {
      const rec = this.recordService.getRecordById(this.id)
      .subscribe((data: Record) => {
        data.deliverer = deliverer;
        this.orderService.setDeliverer(this.id, data)
        .subscribe((_data) => {
          this.record.deliverer = deliverer;
        });
      });
  }

  confirmDelivery() {
    const rec = this.recordService.getRecordById(this.id)
      .subscribe((data: Record) => {
        data.status = 'доставлено';
        this.orderService.setDeliverer(this.id, data)
        .subscribe((_data) => {});
      });
      const asd: Bill = new Bill('deliverer', 'owner', 0, 0,  'date', 'status');
      this.billService.addBill(asd)
      // получили данные, а нужно вставить в массив в объекте
      .subscribe((data: Bill) => {
        console.log(data);
        this.record.status = 'доставлено';
      });
  }
}
