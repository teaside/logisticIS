import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PowPipe } from './pow.pipe';
import { CarFilterPipe } from './car-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
