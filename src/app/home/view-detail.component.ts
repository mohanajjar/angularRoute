import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'view-detail-app',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  product: Product = new Product();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private location: Location) { }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(book => this.product = book);
  }
  goBack(): void {
    this.location.back();
  }
  updateProduct(id: number): void {
    this.router.navigate(['/update-product', id]);
  }
}
