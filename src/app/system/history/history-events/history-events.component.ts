import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Record } from '../../shared/models/record.model';
import { RecordsService } from '../../shared/services/records.service';
import { User } from '../../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'hm-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  public user: User = JSON.parse(window.localStorage.getItem('user'));
  @Input() records: Record[] = [];
  records2: Record[] = [];
  searchValue = '';
  searchPlaceholder = 'Откуда';
  searchField = 'from';

  constructor( private router: Router) {}
  ngOnInit() {}
  changeCriteria(field: string) {
    const namesMap = {
      from: 'Откуда',
      to: 'Куда',
      size: 'Размер',
      weight: 'Вес',
      date: 'Дата'
    };
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }
  // это можно вынести в сервис и задавать фильтр по параметрам (подумать на пайпом)
  showMyRecord(e): void {
    if (e.target.checked) {
      this.records2 = this.records;
      const recs: Record[] = [];
      for (let i = 0; i < this.records.length; i++) {
        if (this.records[i]['creator']) {
        console.log(i, ' ', this.records[i]['creator']);
        if (this.records[i]['creator'].lastIndexOf(this.user.email) !== -1) {
          recs.push(this.records[i]);
        }
        }
      }

      this.records = recs;
      } else {
        this.records = this.records2;
      // this.recordService.getRecordsByCurrentCreator(this.records, false);
    }
  }
  openEvent() {

  }
}
