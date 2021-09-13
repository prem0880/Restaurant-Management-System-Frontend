import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  public viewCategory?:any=[];
  


  constructor(private router:Router,private categoryService:CategoryService) { }

  ngOnInit():any {
    this.categoryService.getAllCategory().subscribe( response => {
      this.viewCategory = response;
      console.log(this.viewCategory);
  });
  }

  deleteCategory(id:number) {
    this.categoryService.deleteCategory(id).subscribe(response => {
          console.log(response);
          window.alert(response);
  });
  }

  updateCategory(id:number) {
    this.router.navigate(["updateCategory"],{state:{id:id}});
  }
  

}
