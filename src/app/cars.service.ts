import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2017,
      color: 'red'
    },
    {
      name: 'Ford2',
      id: 2,
      year: 2015,
      color: 'blue'
    },
    {
      name: 'For3',
      id: 3,
      year: 2017,
      color: 'green'
    },
    {
      name: 'Ford4',
      id: 4,
      year: 2017,
      color: 'yellow'
    },
  ];
}
