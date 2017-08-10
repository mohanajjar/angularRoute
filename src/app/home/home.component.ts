import {Component, OnInit} from '@angular/core';

import {Product} from '../services/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {}
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }
}
