import { ConsoleService } from './console.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

  constructor(private consoleSrvice: ConsoleService) {}

  cars = [{name: 'mazda', isSold: false}, {name: 'lada', isSold: false}, {name: 'audi', isSold: true}];
  addCar(name: string) {
    this.cars.push({name, isSold: false});
    this.consoleSrvice.log(`Машина ${name} была добавлена!`);
  }
}
