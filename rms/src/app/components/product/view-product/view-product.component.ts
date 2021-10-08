import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from 'src/app/services/product/product.service';
import { TimeConverterService } from 'src/app/services/time/time-converter.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  viewProduct!:Product[];
  pageOfItems: Array<any> = [];
  constructor(private router:Router,private productService:ProductService,private time:TimeConverterService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe( response => {
      this.viewProduct = response.data;
  });

  console.log(this.viewProduct[0])
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    
  }

}
