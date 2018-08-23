import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {TodoserviceService} from './todoservice.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [TodoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
