import { Component } from '@angular/core';
import { CartService } from 'services/cart.service';
import { LoginService } from 'services/login.service';
import { ProductServiceService } from 'services/product-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public loggedIn = false;

  User:any;
  cartItemCount=0;
  searchString="";
  constructor(private loginService:LoginService, private cartService:CartService, private productService:ProductServiceService){

  }
  
  ngOnInit():void{
    this.loggedIn = this.loginService.isLoggedIn();
    if(this.loggedIn){
    this.loginService.getProfile().subscribe(
      response=>{
        setTimeout(() => {
          
          this.User = response;
        }, 5000);
        // console.warn(this.User);
      }
      
    );
    this.fetchCartItemCount();

    }
  

  }
  fetchCartItemCount(){
    this.cartService.getCart();
    this.cartService.Cart.subscribe(
      (response:any)=>{
        this.cartItemCount = Object.keys(response.cartItems).length;
      }
    );

  }

  logoutUser(){
    this.loginService.logout();
    location.reload();
  }
  onSubmit(){
    this.productService.getSearchedProduct(this.searchString);
  }

}
