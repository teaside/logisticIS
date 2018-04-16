import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchCar = '';
  cars = [{name: 'mazda', descr: 'WFG'}, {name: 'lada', descr: 'qef'}, {name: 'audi', descr: 'asdf'}, {name: 'BMW', descr: '12333'}];


  asyncTitle = Observable.of('Async title 3 seconds')
  .delay(3000);

  addCar() {
    console.log('add');
    this.cars.push({
      name: 'New car',
      descr: 'asdasdasdas'
    });
  }
}
