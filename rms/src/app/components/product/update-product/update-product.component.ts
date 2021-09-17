import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { MealService } from 'src/app/services/meal/meal.service';
import { Product, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public category:any=[];

  public meal:any=[];

  public categoryObj: any=[] ;

  public mealObj:any=[];

  id?:any;

  constructor(private router:Router,private categoryService:CategoryService,private mealService:MealService,private productService:ProductService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      id : any
      
    };
    this.id = state.id;
    console.log(this.id);
   }

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe( response => {
      this.category = response;
  });

  this.mealService.getAllMeal().subscribe( response => {
    this.meal = response;

  });
  }

  getCategory(cid:number){

    this.categoryObj={"id":cid};
    
  }
    
  getMeal(mid:number){
  
    this.mealObj={"id":mid}
    
  }

  updateProduct(product:Product) {
      this.getCategory(product.category as any as number);
      this.getMeal(product.meal as any as number);
      product.category=this.categoryObj;
      product.meal=this.mealObj;
      this.productService.updateProduct(this.id,product).subscribe((response) => {
        window.alert(response);
      });
  }
    


}
