import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {

  constructor(private carService: CarsService) {}
   carName = '';

  addCar() {
    this.carService.addCar(this.carName);
    this.carName = '';
  }
}
