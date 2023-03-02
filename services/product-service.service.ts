import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  Url="http://localhost:8080/"

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(this.Url + "products" )

    }

  getAllCategories(){
    return this.http.get(this.Url +"categories")
  }

  getAllSubCategories(){
    return this.http.get(this.Url +"subCategories")
  }

  // getfilteredProduct(){
  //   return this.http.post(this.Url + "filteredProducts")
  // }

}
  

