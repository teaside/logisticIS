import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import { BaseApi } from '../core/base-api';
import { HttpClient } from '../utils/HttpClient';
import { Bill } from '../models/bill.model';

@Injectable()
export class BillService {

  constructor(private http: HttpClient) {  }

  getBills(): Observable<Bill[]> {
    return this.http.get('bills');
  }

  checkDeliverer(name: string): boolean {
    this.http.get(`bills/${name}`)
    .subscribe((data: Bill) => {
      if (data.deliverer !== '') {
        return true;
      }
    });
    return false;
  }

  addBill(bill: Bill): Observable<Bill> {
    return this.http.post('bills', bill);
  }

  //  addRecord(record: Record): Observable<Record> {
  //    return this.post('ordersList', record);
  //  }
  //  getRecords(): Observable<Record[]> {
  //   return this.get('ordersList');
  // }
  // getRecordById(id: string): Observable<Record> {
  //   return this.get(`ordersList/${id}`);
  // }
}
