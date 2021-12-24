import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  productsSubj = new Subject<Product[]>();
  products: Product[] = []

  constructor() { }

  addProduct(prod: Product) {
    this.products.push(prod);
    this.productsSubj.next(this.products)
  }

  getObservable(): Observable<Product[]>{
    return this.productsSubj.asObservable()
  }

}
