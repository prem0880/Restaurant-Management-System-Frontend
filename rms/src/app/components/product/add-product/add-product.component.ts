import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from 'src/app/services/category/category.service';
import { Meal, MealService } from 'src/app/services/meal/meal.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Product, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  submitted:boolean=false;

  category!:Category[];

  meal!:Meal[];

  constructor(private categoryService:CategoryService,private toast:NotificationService,private mealService:MealService,private productService:ProductService) { }

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe( response => {
      this.category = response.data;
  });

  this.mealService.getAllMeal().subscribe( response => {
    this.meal = response.data;

  });
  
}



addProduct(product:Product) {
  product.category={
    "id":Number(product.category as any as number)
  }
  product.meal={
    "id":Number(product.meal as any as number)
  }
  this.productService.createProduct(product).subscribe((response) => {
    if(response.statusCode==200){
      this.toast.showSuccess(response.message);
 }
else{
   this.toast.showFailure(response.message);
 }
  });
}

}
