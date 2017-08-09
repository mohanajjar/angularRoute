import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  //  directives: [ROUTER_DIRECTIVES],
  bootstrap: [AppComponent]
})
export class AppModule { }
