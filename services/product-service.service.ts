import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  Url="http://localhost:8080/"
  Products:any = new Observable();
  ProductData = new Subject<any[]>();
  products:any;

  constructor(private http:HttpClient) { }

  getAllProducts(){
    this.http.get(this.Url + "products" ).subscribe(
      (response:any)=>{
        this.ProductData.next(response);
      }
    );

    }

  getAllCategories(){
    return this.http.get(this.Url +"categories")
  }

  getAllSubCategories(){
    return this.http.get(this.Url +"subCategories")
  }

  getfilteredProduct(filter:any){
    this.http.post(this.Url + "filteredProducts",filter).subscribe(
      (response:any)=>{
        this.ProductData.next(response);
      }
    );
    // this.Products.subscribe(
    //   (resonse:any)=>{
    //     console.log(resonse);
    //   }  
      
    // )
  }
  getSearchedProduct(searchString: string){
    this.http.get(this.Url + "product/" + searchString).subscribe(
      (response:any)=>{
        this.ProductData.next(response);
      }
    );
  }
  // fetchProducts(){
  //   this.Products.subscribe(
  //     (resonse:any)=>{
  //       this.products = resonse;
  //       console.log(resonse);
  //     }  
      
  //   )
  // }

}
  

