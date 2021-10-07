import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category/category.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  viewCategory!:Category[];

  constructor(private router:Router,private categoryService:CategoryService,private toast:NotificationService) { }

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

  deleteCategory(id:number) {
    this.categoryService.deleteCategory(id).subscribe(response => {
      if(response.statusCode==200){
        this.toast.showWarn(response.message);
       }
     else{
     this.toast.showFailure(response.message);
     }
        this.reloadData();
      });
  }

  updateCategory(id:number) {
    this.router.navigate(["/updateCategory",id]);
  }
  

}
