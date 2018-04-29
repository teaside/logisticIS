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
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { NewPageComponent } from './new-page/new-page.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HomeComponent,
    CarComponent,
    NotFoundComponent,
    NewPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ CarsService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
