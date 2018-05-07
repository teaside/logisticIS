import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { Record } from '../../../shared/models/record.model';
import { Order } from '../../../shared/models/order.model';
import { RecordsService } from '../../../shared/services/records.service';
import { OrdersService } from '../../../shared/services/orders.service';
import { BillService } from '../../../shared/services/bill.service';

@Component({
  selector: 'hm-history-event',
  templateUrl: './history-event.component.html',
  styleUrls: ['./history-event.component.scss']
})
export class HistoryEventComponent implements OnInit {

  value = 0;
  date = '';

  id: string;
  record: Record = new Record('', '', '', '', '', '', '', '', '', [new Order('', '', 0)], 0);
  orders: any;
  isOrdersAdded = false;

  isLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordsService,
    private orderService: OrdersService,
    private billService: BillService) { }

  ngOnInit() {
    this.isLoaded = false;
    this.record = new Record('', '', '', '', '', '', '', '', '',  [new Order('', '', 0)], 0);
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

  // chooseDeliverer(deliverer: string) {
  //     const rec = this.recordService.getRecordById(this.id)
  //     .subscribe((data: Record) => {
  //       data.deliverer = deliverer;
  //       this.orderService.setDeliverer(this.id, data)
  //       .subscribe((_data) => {});
  //     });
  // }

  // confirmDelivery() {
  //   const rec = this.recordService.getRecordById(this.id)
  //     .subscribe((data: Record) => {
  //       data.status = 'доставлено';
  //       this.orderService.setDeliverer(this.id, data)
  //       .subscribe((_data) => {});
  //     });
  //     const asd: Bill = new Bill('deliverer', 'owner', 0, 0,  'date');
  //     this.billService.addBill(asd)
  //     // получили данные, а нужно вставить в массив в объекте
  //     .subscribe((data: Bill) => {
  //       console.log(data);
  //     });
  // }
  makeSuggestion() {
    const user: User = JSON.parse(window.localStorage.getItem('user'));
    // let order: Order[] = [];
       const rec = this.recordService.getRecordById(this.id)
      .subscribe((data) => {
        // order = data.respondedDeliverers;
        // order.push(new Order(user.name, this.date, this.value));
        data.respondedDeliverers.push(new Order(user.name, this.date, this.value));
        console.log(data);
        //  for (let i = 0; i < order.length; i++) {
        //    if (order[i].deliverer === user.name) {
        //     order[i]
        //    }
        //  }

    // кнопка скрыта в html
        this.orderService.setDeliverer(this.id, data)
        .subscribe((_data) => {});
      });
  }
}
