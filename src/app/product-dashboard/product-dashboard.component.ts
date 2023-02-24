import { Component } from '@angular/core';
import { ProductServiceService } from 'services/product-service.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent {
  products:any;

  constructor(private productService: ProductServiceService) {
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      response=>{
        console.log(response);
        this.products = response;
        console.log(this.products);
        
      }
    );
    

  }
  
  
  

}
