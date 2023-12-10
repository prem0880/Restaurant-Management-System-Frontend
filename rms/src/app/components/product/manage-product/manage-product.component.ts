import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Product, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
 modalOptions: NgbModalOptions; //modal options such as backdrop, backdropClass
  viewProduct!:Product[];
  term!:string;
  pageOfItems: Array<any> = [];
  constructor(private router:Router,private toast:NotificationService,private modalService:NgbModal,private productService:ProductService)
   { this.modalOptions = {

      //it is used for bootsrap ngb modal setup

      backdrop: 'static',

      backdropClass: 'customBackdrop', }
    }
  
   ngOnInit(): any {
    this.reloadData(); 
    
  }

  reloadData(){
    this.productService.getAllProduct().subscribe( response => {
      this.viewProduct = response.data;
  });
  }

  deleteProduct(content:any,id:number) {
    this.modalService.open(content, this.modalOptions).result.then(

      () => {
    this.productService.deleteProduct(id).subscribe(response => {
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
   }
  else{
     this.toast.showFailure(response.message);
   }

    },error=>{
      if(error.data==null)
      this.toast.showFailure("This action can't be performed,Since it has dependencies");
    }
    );
  },
  (reason)=>{}//to catch the promise rejection
    );

  }

  updateProduct(id:number) {
    this.router.navigate(["/updateProduct",id]);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    
  }


}
