import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private carsService: CarsService) {}

  ngOnInit() {
  }

}
