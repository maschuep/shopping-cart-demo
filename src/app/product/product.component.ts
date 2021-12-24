import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../core/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  counter = 0

  ngOnInit(): void {
  }

  onProductAdd() {
    this.shoppingCartService.addProduct({ name: `OL-Karte ${++this.counter}` })
  }

}
