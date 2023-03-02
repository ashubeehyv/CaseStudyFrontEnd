import { Component } from '@angular/core';
import { CartService } from 'services/cart.service';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public loggedIn = false;

  User:any;
  cartItemCount=0;

  constructor(private loginService:LoginService, private cartService:CartService){

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
      },
      error=>{
        console.log(error);
      }
      
    );
    this.fetchCartItemCount();

    }
  

  }
  fetchCartItemCount(){
    this.cartService.getCart().subscribe(
      (response:any)=>{
        this.cartItemCount = Object.keys(response.cartItems).length;
      },
      error=>{
        console.log(error);
      }
    );

  }

  logoutUser(){
    this.loginService.logout();
    location.reload();
  }

}
