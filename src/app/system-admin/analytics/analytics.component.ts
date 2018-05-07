import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../shared/models/record.model';
import { User } from '../../shared/models/user.model';
import { Bill } from '../../shared/models/bill.model';
import { Router } from '@angular/router';
import { BillService } from '../../shared/services/bill.service';

@Component({
  selector: 'hm-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
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
