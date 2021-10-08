import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, CategoryService } from 'src/app/services/category/category.service';
import { MealService } from 'src/app/services/meal/meal.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { OrderItem, OrderItemService } from 'src/app/services/order-item/order-item.service';
import { Order, OrderService } from 'src/app/services/order/order.service';
import { Product, ProductService } from 'src/app/services/product/product.service';
import { TimeConverterService } from 'src/app/services/time/time-converter.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
 
  id!:number;
  quantity!:number;
  productId!:number;
  productList:any;//change need:explore
  categoryList!: Category[];
  mealId!:number;
  product!:Product;
  productType!:string;
  productCategory!:number;
  productQuantity!:number;
  order!:Order
  orderItem!:OrderItem|any;//error because of relationship so, any used 
  orderId!:number
  orderedItems!:OrderItem[]
  length!:number
  meal!:string;
  submitted:boolean=false;


  constructor(private productService:ProductService,private time:TimeConverterService,private toast:NotificationService,private orderService:OrderService,private orderItemService:OrderItemService,private router:Router, private route : ActivatedRoute,private categoryService:CategoryService,private mealService:MealService) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe( response => {
      console.log(response.data)
      this.categoryList = response.data;
      console.log(this.categoryList)
  });
  this.meal=this.time.getTime();
  }

  getType(type:any){
    this.productType=type;
  }

  getMeal(meal:any){
    console.log(meal);
    this.mealService.getMealByName(meal).subscribe( response => {
     this.mealId = response.data;
     console.log(this.mealId)
     this.productService.getProductByMeal(this.mealId).subscribe((response)=>{
        this.productList=response.data;
        console.log(this.productList);
      },error=>console.log(error.error));
     console.log(this.mealId) 
   });

  }


  getCategory(category:any){
    this.productCategory=category;
    console.log(this.productType+" "+this.productCategory);
    this.productService.getProductByTypeAndCategory(this.productCategory as any as number,this.productType).subscribe((response)=>{
     this.productList=response.data;
     for(let x=0;x<this.productList.length;x++){
       if(this.productList.meal.name==this.meal){
         console.log(this.productList.meal.name)
          this.product=this.productList[x];
          console.log(this.productList[x])
       }
     }
     console.log(this.productList[0].meal.name);
      console.log(response.data);
    },error=>console.log(error.error));
  }

  getProduct(product:any){
    this.productId=product;
    console.log(this.productId);
    this.productService.getProductById(this.productId).subscribe((response)=>{
      this.product=response.data;
      console.log(this.product)
    },error=>console.log(error));
  }

  getQuantity(quantity:any){
    this.productQuantity=quantity;
    console.log(this.productQuantity)
  }


  addOrderItem(){
    console.log(this.id)
    this.orderService.getOrderId(this.id as any as number).subscribe((response)=>{
      console.log(response.data)
      this.orderId=response.data
      this.orderItem=new OrderItem()
      this.orderItem.quantity=this.productQuantity
      this.orderItem.product={
        id:Number(this.productId)
      }
      this.orderItem.order={
        id:Number(this.orderId)
      }
      console.log(this.orderItem)
      this.orderItemService.addOrderItem(this.orderItem).subscribe(response=>{
        console.log(response.message)
        if(response.statusCode==200){
          this.toast.showSuccess(response.message);
         }
       else{
       this.toast.showFailure(response.message);
       }
      this.orderItemService.getOrderedItems(this.orderId).subscribe(response=>{
          this.orderedItems=response.data
          this.length=this.orderedItems.length
          console.log(this.length)
          console.log(this.orderedItems)
          this.orderService.getOrderById(this.orderId).subscribe(response=>{
            console.log(response.data)
            this.order=response.data
          })
        })
      })
    })
  }
  goToPayment()
  {
    localStorage.setItem("order",JSON.stringify(this.order))
    this.router.navigate(['processOrder'])
  }

}
