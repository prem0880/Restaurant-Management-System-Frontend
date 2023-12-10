import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category/category.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  submitted:boolean=false;

  constructor(private categoryService:CategoryService,private router:Router,private toast:NotificationService) { }

  ngOnInit(): void {
  }

  addCategory(category : Category) {
    this.categoryService.createCategory(category).subscribe((response) => {
      console.log(response.message)
      if(response.statusCode==201){
           this.toast.showSuccess(response.message);
           this.router.navigate(['/manageCategory']);
      }
      else{
        this.toast.showFailure(response.message);
      }
    });
  }

}
