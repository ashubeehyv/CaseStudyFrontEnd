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
  categories: any;
  subCategories: any;
  filter={
    category:"Select All",
    subCategory:"Select All",
    minValue:0,
    maxValue:1000000

  }

  constructor(private productService: ProductServiceService, private cartService: CartService) {
    
  }
  ngOnInit() {
    this.productService.getAllProducts();
    this.productService.ProductData.subscribe(
      (response:any)=>{
        this.products = response;
        
      }
    );
    this.productService.getAllCategories().subscribe(
      response => {
        this.categories = response;

      }
    );
    this.productService.getAllSubCategories().subscribe(
      response => {
        this.subCategories = response;

      }
    );

  }

  addItemToCart(productId:number){
    this.cartService.addItem(productId);
  }

  onSubmit(){
    this.productService.getfilteredProduct(this.filter);

  }
  
  
  

}
