import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars: [{name: string, year: number}] = [{
    name: 'Ford',
    year: 2015
  }, {
    name: 'Mazda',
    year: 2010
  }, {
    name: 'Audi',
    year: 2017
  }];

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }
  changeCarName() {
    this.cars[0].name = 'New car name';
  }
  deleteCar() {
    this.cars.splice(0, 1);
  }
}
