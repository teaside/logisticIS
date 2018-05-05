import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { SystemModule } from './system/system.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    SystemModule,
    BrowserAnimationsModule

  ],
  providers: [ UserService, AuthService ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
