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
import { SystemDeliveryModule } from './system-delivery/system-delivery.module';
import { SystemAdminModule } from './system-admin/system-admin.module';
import { Bill } from './shared/models/bill.model';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BillService } from './shared/services/bill.service';
import { HttpClient } from './shared/utils/HttpClient';
import { ComissionService } from './shared/services/comission.service';
// import { SystemAdminModule } from './system-admin/system-admin.module';



@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    SystemModule,
    SystemDeliveryModule,
    SystemAdminModule,
    BrowserAnimationsModule
  ],
  providers: [ UserService, AuthService, BillService, HttpClient, ComissionService ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
