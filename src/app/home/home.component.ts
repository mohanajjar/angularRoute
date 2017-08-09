import { Component, OnInit } from '@angular/core';

import { Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Product[];
  constructor(private bookService: ProductService) { }
  getBooks(): void {
    this.bookService.getProducts().then(books => this.books = books);
  }
  ngOnInit(): void {
    this.getBooks();
  }
}
