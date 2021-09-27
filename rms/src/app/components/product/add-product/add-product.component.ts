import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { MealService } from 'src/app/services/meal/meal.service';
import { Product, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  submitted:boolean=false;

  category:any=[];

  meal:any=[];

  categoryObj: any=[] ;

  mealObj:any=[];

  constructor(private categoryService:CategoryService,private mealService:MealService,private productService:ProductService) { }

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe( response => {
      this.category = response;
  });

  this.mealService.getAllMeal().subscribe( response => {
    this.meal = response;

  });
  
}

getCategory(id:number){

this.categoryObj={"id":id};

}

getMeal(id:number){
this.mealObj={"id":id}

}


addProduct(product:Product) {
  this.getCategory(product.category as any as number);
  this.getMeal(product.meal as any as number);
  product.category=this.categoryObj;
  product.meal=this.mealObj;
  this.productService.createProduct(product).subscribe((response) => {
    window.alert(response);
  },
  error=>window.alert(error.error));
}

}
