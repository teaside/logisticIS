import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PowPipe } from './pow.pipe';
import { CarFilterPipe } from './car-filter.pipe';
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';
import { CarsService } from './cars.service';
import { ConsoleService } from './console.service';

@NgModule({
  declarations: [
    AppComponent,
    PowPipe,
    CarFilterPipe,
    CarComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ CarsService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
