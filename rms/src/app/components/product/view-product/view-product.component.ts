import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  public viewProduct?:any=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): any {
    this.productService.getAllProduct().subscribe( response => {
      this.viewProduct = response;
      console.log(this.viewProduct);
  });
  }

}
