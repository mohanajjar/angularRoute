import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './home/view-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { PageNotFoundComponent } from './page-not-found.component';

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

    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
