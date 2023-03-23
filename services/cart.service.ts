import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = "http://localhost:8080/cart";

  Cart = new Subject<any[]>();

  constructor(private http:HttpClient) { }

  // getCart(){
  //   return this.http.get(`${this.url}/getCart`);
  // }
  getCart(){
    this.http.get(`${this.url}/getCart`).subscribe(
      (response:any)=>{
        this.Cart.next(response);
      }
    );
  }

  addItem(productId:number){
    this.http.get(`${this.url}/add/${productId}`).subscribe(
      (response:any)=>{
        this.Cart.next(response);
      }
    );
  }
  removeProduct(cartItemId:number){
    return this.http.delete(`${this.url}/remove/${cartItemId}`).subscribe(
      (response:any)=>{
        this.Cart.next(response);
      }
    );
  }

  placeOrder(){
    this.http.get(`http://localhost:8080/order/place`).subscribe(
      (response:any)=>{
        this.Cart.next(response);
      }
    );

  }
}
