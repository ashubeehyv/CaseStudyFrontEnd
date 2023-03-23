import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = "http://localhost:8080/order";

  OrderHistory = new Subject<any[]>();

  constructor(private http:HttpClient) { }

  getOrderHistory(){
    this.http.get(`${this.url}/history`).subscribe(
      (response:any)=>{
        this.OrderHistory.next(response);
      }
    );
  }

  placeOrder(){
    this.http.get(`${this.url}/place`).subscribe(
      (response:any)=>{
        this.OrderHistory.next(response);
      }
    );

  }
}
