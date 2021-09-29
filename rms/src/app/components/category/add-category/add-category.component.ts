import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  submitted:boolean=false;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  addCategory(category : Category) {
    this.categoryService.createCategory(category).subscribe((response) => {
      console.log(response.message)
      window.alert(response.message);
    },
    error => window.alert(error.error)
    );
  }

}
