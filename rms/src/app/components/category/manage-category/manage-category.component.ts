import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Category, CategoryService } from 'src/app/services/category/category.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {
  modalOptions: NgbModalOptions; //modal options such as backdrop, backdropClass
  viewCategory!:Category[];

  constructor(private router:Router,private categoryService:CategoryService,private modalService:NgbModal,private toast:NotificationService) { 

    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop', }
  }

  ngOnInit():void {
    this.reloadData();  
  }

  reloadData(){
    this.categoryService.getAllCategory().subscribe( response => {
      console.log(response.data)
      this.viewCategory = response.data;
      console.log(this.viewCategory)
  });
  }




  deleteCategory(content: any, id: number) {

    this.modalService.open(content, this.modalOptions).result.then(

      () => {

        //once modal is resolved, then we call deleteEmployeeById of employee service

        this.categoryService.deleteCategory(id).subscribe(response => {
          if(response.statusCode==200){
            this.toast.showSuccess(response.message);
           }
         else{
         this.toast.showFailure(response.message);
         }
            this.reloadData();
          },error=>{
            if(error.data==null)
            this.toast.showFailure("This action can't be performed,Since it has dependencies");
          }
          );
      },

      (reason) => {} //to catch the promise rejection

    );

  }

  updateCategory(id:number) {
    this.router.navigate(["/updateCategory",id]);
  }
  

}
