import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'cars/:id/:name', component: CarComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
