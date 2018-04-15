import { Component, OnInit } from '@angular/core';
// import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = '';
  inputText = '';

  constructor() {
  }
  addCar() {
    this.addCarStatus = 'Машина добавлена';
  }
  onKeyUp(event: Event) {
   this.inputText = (<HTMLInputElement>event.target).value;
  }
}
