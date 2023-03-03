import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  Url="http://localhost:8080/"
  Products:any = new Observable();
  products:any;

  constructor(private http:HttpClient) { }

  getAllProducts(){
    this.Products=this.http.get(this.Url + "products" );

    }

  getAllCategories(){
    return this.http.get(this.Url +"categories")
  }

  getAllSubCategories(){
    return this.http.get(this.Url +"subCategories")
  }

  getfilteredProduct(filter:any){
    this.Products=this.http.post(this.Url + "filteredProducts",filter);
    this.Products.subscribe(
      (resonse:any)=>{
        console.log(resonse);
      }  
      
    )
  }
  fetchProducts(){
    this.Products.subscribe(
      (resonse:any)=>{
        this.products = resonse;
        console.log(resonse);
      }  
      
    )
  }

}
  

