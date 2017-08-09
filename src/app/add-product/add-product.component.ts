import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'add-product-app',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products: Product[];
  product: Product = new Product();
  constructor(private router: Router,
    private bookService: ProductService) { }
  getProducts(): void {
    this.bookService.getProducts().then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }
  addProduct(): void {
    this.bookService.addProduct(this.product);
    this.router.navigate(['/home']);
  }
}
