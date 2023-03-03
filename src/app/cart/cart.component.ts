import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.fetchCart();
  }

  fetchCart() {
   this.cartService.getCart().subscribe(
      response => {
        this.cart = response;

      },
      error => {
        console.error(error);
      }
    );
  }
  increase(productId: number) {
    this.cartService.addItem(productId).subscribe(
      response => {
        this.fetchCart();
      },
      error => {
        console.error(error);

      }

    );
  }
  remove(cartItemId:number) {
    this.cartService.removeProduct(cartItemId).subscribe(
      response => {
        this.fetchCart();
      },
      error => {
        console.error(error);

      }

    );;
  }

}
