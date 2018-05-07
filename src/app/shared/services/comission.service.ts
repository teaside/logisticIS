import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import { BaseApi } from '../core/base-api';
import { HttpClient } from '../utils/HttpClient';

@Injectable()
export class ComissionService {

  constructor(private http: HttpClient) {  }

  getComission(): Observable<string> {
    return this.http.get('comission');
  }

  updateComission(percent: string): Observable<string> {
    return this.http.post('comission', percent);
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
