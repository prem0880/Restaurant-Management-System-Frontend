import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category/category.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  
  submitted:boolean=false;
  id!:number;
  category:Category=new Category();

  constructor(private router:Router,private route:ActivatedRoute,private toast:NotificationService,private categoryService:CategoryService) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe((response)=>{
      console.log(response.data)
      this.category=response.data;
      console.log(this.category)
    }, error => console.log(error));
    
  }

  updateCategory(category : Category) {
    console.log(category)
    this.categoryService.updateCategory(this.id,category).subscribe((response) => {
      console.log(response.message)
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
       }
     else{
     this.toast.showFailure(response.message);
     }
      this.goToList();
    });
  }

  goToList(){
    this.router.navigate(['manageCategory']);
  }

}
