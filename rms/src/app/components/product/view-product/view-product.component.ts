import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  viewProduct!:Product[];
  pageOfItems: Array<any> = [];
  term!:string;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProductByMeal().subscribe( response => {
      console.log(response); 
      this.viewProduct = response.data;
  });

  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    
  }

}
