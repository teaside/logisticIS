import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../shared/models/record.model';

@Component({
  selector: 'hm-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {

@Input() records: Record[] = [];
searchValue = '';
searchPlaceholder = 'Откуда';
searchField = 'from';
  constructor() { }

  ngOnInit() {
  }
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
}
