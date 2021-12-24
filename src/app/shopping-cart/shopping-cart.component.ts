import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../core/product';
import { ShoppingCartService } from '../core/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.products$ = this.shoppingCartService.getObservable()
   }

  ngOnInit(): void {
    
  }

  

}
