import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderService } from 'services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  
  OrderHistoryData:any;
  constructor(private orderService: OrderService){

  }

  ngOnInit() {
    this.orderService.getOrderHistory();
    this.orderService.OrderHistory.subscribe(
      (response:any)=>{
          this.OrderHistoryData = response;
          console.log(response);
      }
    )
  }

  getOrderTotal(cartItems:any[]){
    return this.orderService.getTotalBill(cartItems);
  }
}
