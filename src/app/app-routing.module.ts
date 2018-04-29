import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { NewPageComponent } from './new-page/new-page.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent, canActivate: [AuthGuard] , children: [
    { path: ':id/:name', component: CarComponent }
  ] },
  // { path: 'cars/:id/:name', component: CarComponent },
  { path: '', component: HomeComponent },
  { path: 'new', component: NewPageComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
