import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'update-product-app',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product = new Product();
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) { }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }
}
