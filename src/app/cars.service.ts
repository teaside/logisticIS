import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1
    },
    {
      name: 'Ford2',
      id: 2
    },
    {
      name: 'For3',
      id: 3
    },
    {
      name: 'Ford4',
      id: 4
    },
  ];
}
