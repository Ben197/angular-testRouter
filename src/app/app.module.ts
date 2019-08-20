import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSub1Component } from './admin/adminsub1/adminsub1.component';
import { AdminSub2Component } from './admin/adminsub2/adminsub2.component';

import { UserComponent } from './user/user.component'; 

import { AppRoutingModule } from './app-routing.module';




@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AdminComponent, AdminSub1Component, AdminSub2Component, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

