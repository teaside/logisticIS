import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Record } from '../shared/models/record.model';
import { RecordsService } from '../shared/services/records.service';
import { Order } from '../shared/models/order.model';

@Component({
  selector: 'hm-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit, OnDestroy {
  constructor(private recordService: RecordsService) {}

  subscription: Subscription;
  user = JSON.parse(window.localStorage.getItem('user'));
  // @Output() RecordAdd = new EventEmitter<Record>();
  ngOnInit() {}

  onSubmit(form: NgForm) {
    const { from, to, sizes, weight, date } = form.value;
    // tslint:disable-next-line:max-line-length
    const record = new Record(
      this.user.email,
      from,
      to,
      sizes,
      weight,
      date,
      'open',
      [new Order('', '', 0)]
    );
    this.subscription = this.recordService
      .addRecord(record)
      .subscribe((_record: Record) => {
        form.reset();
        form.form.patchValue({ capacity: 1 });
      });
  }

  ngOnDestroy() {}
}
