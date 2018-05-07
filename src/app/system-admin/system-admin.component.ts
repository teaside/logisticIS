import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'hm-system-admin',
  templateUrl: './system-admin.component.html'
})
export class SystemAdminComponent implements OnInit {

  constructor() {}
  ngOnInit() {
    // this.billService.getBills()
    // .subscribe((data: Bill[]) => {
    //   this.bills = data;
    // });
  }
}
