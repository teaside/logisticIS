import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarsService } from './cars.service';

import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CarComponent } from './car/car.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HomeComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ CarsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
