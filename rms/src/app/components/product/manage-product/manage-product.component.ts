import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  viewProduct?:any=[];

  constructor(private router:Router,private productService:ProductService) { }

   ngOnInit(): any {
    this.reloadData(); 
    
  }

  reloadData(){
    this.productService.getAllProduct().subscribe( response => {
      this.viewProduct = response.data;
  });
  }

  deleteProduct(id:number) {
    this.productService.deleteProduct(id).subscribe(response => {
          window.alert(response.message);
  },
  error=>window.alert(error.error));
  }

  updateProduct(id:number) {
    this.router.navigate(["/updateProduct",id]);
  }


}
