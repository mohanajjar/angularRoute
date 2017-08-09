import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'manage-product-app',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  books: Product[];
  product: Product = new Product();
  constructor(private router: Router, private productService: ProductService) { }
  getBooks(): void {
    this.productService.getProducts().then(books => this.books = books);
  }
  ngOnInit(): void {
    this.getBooks();
  }
  updateBook(id: number): void {
    this.router.navigate(['/update-product', id]);
  }
  deleteBook(id: number): void {
    this.productService.deleteProduct(id);
  }
}
