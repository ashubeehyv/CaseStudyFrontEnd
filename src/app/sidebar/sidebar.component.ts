import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'services/product-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: any;
  subCategories: any;
  filter={
    category:"Select All",
    subCategory:"Select All",
    minValue:0,
    maxValue:1000000000

  }
  MinValue = 0;

  constructor(private productService: ProductServiceService, private fb: FormBuilder) {

  }
  ngOnInit() {
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

  onSubmit(){
    console.log("Submit Button is working");
    console.warn(this.filter)
  }

}


