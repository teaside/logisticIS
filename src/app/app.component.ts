import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cars = [];

  constructor(private carsService: CarsService) {

  }
  ngOnInit() {
    this.cars = this.carsService.cars;
  }
  addCarToList(carName: string) {
    this.carsService.addCar(carName);
  }
}
