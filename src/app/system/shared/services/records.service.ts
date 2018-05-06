import { Injectable } from '@angular/core';
import { BaseApi } from '../../../shared/core/base-api';
import { Http } from '@angular/http';
import { Record } from '../models/record.model';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../shared/models/user.model';

@Injectable()
export class RecordsService extends BaseApi {

  constructor(public http: Http) {
    super(http);
   }
   addRecord(record: Record): Observable<Record> {
     return this.post('ordersList', record);
   }
   getRecords(): Observable<Record[]> {
    return this.get('ordersList');
  }
  getRecordById(id: string): Observable<Record> {
    return this.get(`ordersList/${id}`);
  }
}

// this.recordService.getRecords()
// .subscribe((data: Record[]) => {
//   // console.log(data);

//   this.records = data;
//   this.calculateChartData();
// });
