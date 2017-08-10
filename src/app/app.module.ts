import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './home/view-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
// Import your library
import { CollapsibleModule } from 'angular2-collapsible'; // <-- import the module


import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ViewDetailComponent,
    ManageProductComponent,
    AddProductComponent,
    PageNotFoundComponent

  ],
  imports: [
    CollapsibleModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
