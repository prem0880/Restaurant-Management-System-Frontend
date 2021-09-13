import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  addCategory(category : Category) {
    console.log(category);
    this.categoryService.createCategory(category).subscribe((response) => {
      window.alert(response);
    })
  }

}
