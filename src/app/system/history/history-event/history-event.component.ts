import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordsService } from '../../shared/services/records.service';
import { Record } from '../../shared/models/record.model';
import { OrdersService } from '../../shared/services/orders.service';
import { Order } from '../../shared/models/order.model';

@Component({
  selector: 'hm-history-event',
  templateUrl: './history-event.component.html',
  styleUrls: ['./history-event.component.scss']
})
export class HistoryEventComponent implements OnInit {

  id: string;
  record: Record = new Record('', '', '', '', '', '', '', [new Order('', '', 0)], 0);
  orders: any;
  isOrdersAdded = false;

  isLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordsService,
    private orderService: OrdersService) { }

  ngOnInit() {
    this.record = new Record('', '', '', '', '', '', '', [new Order('', '', 0)], 0);
    this.isLoaded = false;
     this.isOrdersAdded = true;
    this.id = this.route.snapshot.params['id'];
    this.recordService.getRecordById(this.id)
    .subscribe((data) => {
        if (data.respondedDeliverers[0].deliverer.indexOf('') !== -1) {
          this.isOrdersAdded = true;
          this.orders = data.respondedDeliverers;
        }
      // console.log('this.orders', this.orders);
      this.record = data;
    });
    this.isLoaded = true;
    // this.orderService.getOrdersById(this.id)
    // .subscribe((data) => {
    //   console.log(data);
    // });

  }

}
