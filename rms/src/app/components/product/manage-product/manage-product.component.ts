import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Product, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  viewProduct!:Product[];

  constructor(private router:Router,private toast:NotificationService,private productService:ProductService) { }

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
      if(response.statusCode==200){
        this.toast.showWarn(response.message);
   }
  else{
     this.toast.showFailure(response.message);
   }

    });
  }

  updateProduct(id:number) {
    this.router.navigate(["/updateProduct",id]);
  }


}
