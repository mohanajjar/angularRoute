import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-product';

@Injectable()
export class ProductService {
  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
  addProduct(produit: Product): void {
    this.getProducts().then(products => {
      let maxIndex = products.length - 1;
      let productWithMaxIndex = products[maxIndex];
      produit.id = productWithMaxIndex.id + 1;
      products.push(produit);
    }
    );
  }
  getProduct(id: number): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === id));
  }
  deleteProduct(id: number): void {
    this.getProducts().then(products => {
      let product = products.find(ob => ob.id === id);
      let productIndex = products.indexOf(product);
      products.splice(productIndex, 1);
    }
    );
  }
}