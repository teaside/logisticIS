import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Record } from '../../shared/models/record.model';
import { Bill } from '../../shared/models/bill.model';
import { BillService } from '../../shared/services/bill.service';


@Component({
  selector: 'hm-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public user: User = JSON.parse(window.localStorage.getItem('user'));
  @Input() records: Record[] = [];
  records2: Record[] = [];
  bills: Bill[];

  constructor( private router: Router,
  private billService: BillService) {}
  ngOnInit() {
    this.billService.getBills()
    .subscribe((data: Bill[]) => {
      this.bills = data;
    });
  }
  openEvent() {

  }
}
