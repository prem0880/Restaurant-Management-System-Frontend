import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';
import { MealService } from 'src/app/services/meal/meal.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { OrderItem, OrderItemService } from 'src/app/services/order-item/order-item.service';
import { Order, OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
 

  id:any;
  quantity:any;
  productId:any;
  productList:any;
  categoryList: any;
  mealId:any;
  product:any;
  productType:any;
  productCategory:any;
  productQuantity:any;
  order:Order|any
  orderItem:OrderItem|any
  orderId:Number|any
  orderedItems:Observable<OrderItem[]>|any
  length:number|any
  meal?:string;

  constructor(private productService:ProductService,private toast:NotificationService,private orderService:OrderService,private orderItemService:OrderItemService,private router:Router, private route : ActivatedRoute,private categoryService:CategoryService,private mealService:MealService) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe( response => {
      console.log(response.data)
      this.categoryList = response.data;
      console.log(this.categoryList)
  });


   var today = new Date()
   var curHr = today.getHours()
   if (curHr < 12) {
 console.log('Breakfast')
    this.meal="Breakfast"
} else if (curHr < 18) {
 console.log('Lunch')
 this.meal="Lunch"
 } else {
 console.log('Dinner')
 this.meal="Dinner"
 }
 console.log(this.meal)
 this.mealService.getMealByName(this.meal).subscribe( response => {
  this.mealId = response.data;
  console.log(this.mealId)
});
  }

  getType(type:any){
    this.productType=type;
  }

  getMeal(meal:any){
    console.log(meal);
  }

  getCategory(category:any){
    this.productCategory=category;
    console.log(this.productType+" "+this.productCategory);
    this.productService.getProductByTypeAndCategory(this.productCategory as any as number,this.productType).subscribe((response)=>{
     this.productList=response.data;
      console.log(response.data);
      // this.productService.getProductByMeal(this.mealId).subscribe((response)=>{
      //   this.productList=response.data;
      //   console.log(this.productList);
      // },error=>console.log(error.error));
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
