import { Injectable } from '@angular/core';
import { BaseApi } from '../../../shared/core/base-api';
import { Http } from '@angular/http';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../shared/models/user.model';

@Injectable()
export class OrdersService extends BaseApi {

user: User = JSON.parse(window.localStorage.getItem('user'));
  constructor(public http: Http) {
    super(http);
   }

   getOrdersById(id: string): Observable<Order> {
    return this.get(`ordersList/${id}/respondedDeliverers`);
  }

}
