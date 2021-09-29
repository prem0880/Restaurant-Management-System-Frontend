import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { MealService } from 'src/app/services/meal/meal.service';
import { Product, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  submitted:boolean=false;

  product?:any;

  category:any=[];

  meal:any=[];

  categoryObj: any=[] ;

  mealObj:any=[];

  id?:any;

  constructor(private router:Router,private route:ActivatedRoute,private categoryService:CategoryService,private mealService:MealService,private productService:ProductService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getAllCategory().subscribe( response => {
      this.category = response.data;
  },error=>console.log(error));

  this.mealService.getAllMeal().subscribe( response => {
    this.meal = response.data;
  },error=>console.log(error));
  
  this.productService.getProductById(this.id).subscribe((response)=>{
    this.product=response.data;
    console.log(this.product)
  },error=>console.log(error));
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
        window.alert(response.message);
        this.goToList();
      },error=>window.alert(error.error));
  }

  goToList(){
    this.router.navigate(['manageProduct']);
  }
    


}
