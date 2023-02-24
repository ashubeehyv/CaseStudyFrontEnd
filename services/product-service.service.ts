import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  Url="http://localhost:8080/products"

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(this.Url)

    }

  }

