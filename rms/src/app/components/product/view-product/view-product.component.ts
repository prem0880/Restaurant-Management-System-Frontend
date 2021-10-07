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

  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe( response => {
      this.viewProduct = response.data;
  });
  }

}
