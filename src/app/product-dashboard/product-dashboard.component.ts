import { Component } from '@angular/core';
import { CartService } from 'services/cart.service';
import { ProductServiceService } from 'services/product-service.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent {
  products:any;

  constructor(private productService: ProductServiceService, private cartService: CartService) {
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      response=>{
        // console.log(response);
        this.products = response;
        // console.log(this.products);
        
      }
    );


  }

  addItemToCart(productId:number){
    this.cartService.addItem(productId).subscribe(
      response=>{
        
        console.log(response);
      },
      error=>{
        console.error(error);
        
      }
      
    );
  }
  
  
  

}
