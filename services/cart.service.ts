import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = "http://localhost:8080/cart";

  constructor(private http:HttpClient) { }

  getCart(){
    return this.http.get(`${this.url}/getCart`);
  }

  addItem(productId:number){
    return this.http.get(`${this.url}/add/${productId}`);
  }
  removeProduct(cartItemId:number){
    return this.http.delete(`${this.url}/remove/${cartItemId}`);
  }
}
