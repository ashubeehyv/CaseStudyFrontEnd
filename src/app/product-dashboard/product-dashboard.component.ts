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
        // console.log(response);
        this.products = response;
        // console.log(this.products);
        
      }
    );
    this.productService.getAllCategories().subscribe(
      response => {
        // console.log(response);
        this.categories = response;
        // console.log(this.categories);

      }
    );
    this.productService.getAllSubCategories().subscribe(
      response => {
        // console.log(response);
        this.subCategories = response;
        // console.log(this.subCategories);

      }
    );

  }

  addItemToCart(productId:number){
    this.cartService.addItem(productId).subscribe(
      response=>{
        this.cartService.getCart();

        console.log(response);
      }
      
    );
  }

  onSubmit(){
    this.productService.getfilteredProduct(this.filter);

  }
  
  
  

}
