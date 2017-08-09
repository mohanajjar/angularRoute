import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './home/view-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { UpdateProductComponent } from './manage-product/update-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view-detail/:id', component: ViewDetailComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'manage-product', component: ManageProductComponent },
//  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
