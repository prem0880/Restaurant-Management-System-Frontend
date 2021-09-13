import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  
  id?:any;

  constructor(private route: ActivatedRoute,private router:Router,private categoryService:CategoryService) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      id : any
      
    };
    this.id = state.id;
    console.log(this.id);
  }

  ngOnInit(): void {
  }

  updateCategory(category : Category) {
    console.log(category);
    this.categoryService.updateCategory(this.id,category).subscribe((response) => {
      window.alert(response);
    })
  }

}
