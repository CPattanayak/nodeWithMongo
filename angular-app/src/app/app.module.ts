import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {TodoserviceService} from './todoservice.service';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@progress/kendo-angular-layout';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule

  ],
  providers: [TodoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
