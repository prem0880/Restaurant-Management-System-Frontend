import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  
  submitted:boolean=false;
  id?:any;
  category?:any;

  constructor(private router:Router,private route:ActivatedRoute,private categoryService:CategoryService) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe((data)=>{
      this.category=data;
    }, error => console.log(error));
    
  }

  updateCategory(category : Category) {
    this.categoryService.updateCategory(this.id,category).subscribe((response) => {
      window.alert(response);
      this.goToList();
    }, error => window.alert(error.error));
  }

  goToList(){
    this.router.navigate(['manageCategory']);
  }

}
