import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs/Observable';
import { Record } from '../models/record.model';
import { BaseApi } from '../core/base-api';
import { User } from '../models/user.model';

@Injectable()
export class OrdersService extends BaseApi {

user: User = JSON.parse(window.localStorage.getItem('user'));
  constructor(public http: Http) {
    super(http);
   }

   getOrdersById(id: string): Observable<Order> {
    return this.get(`ordersList/${id}/respondedDeliverers`);
  }
  setDeliverer(id: string, record: Record): Observable<Record> {
    return this.put(`ordersList/${id}`, record);
  }

}
