import { Component } from '@angular/core';
import { CartService } from 'services/cart.service';
import { OrderService } from 'services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any;
  Total_Bill=0;
  constructor(private cartService: CartService, private orderService:OrderService) { }

  ngOnInit() {
    this.fetchCart();
  }

  fetchCart() {
    this.cartService.getCart();
    this.cartService.Cart.subscribe(
      response => {
        this.cart = response;
        this.Total_Bill = this.orderService.getTotalBill(this.cart.cartItems);

      }
    );
  }
  increase(productId: number) {
    this.cartService.addItem(productId);
  }

  remove(cartItemId:number) {
    this.cartService.removeProduct(cartItemId);
  }

  placeOrder(){
    this.cartService.placeOrder();
  }

}
