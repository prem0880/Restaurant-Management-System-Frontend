import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { OrderItem, OrderItemService } from 'src/app/services/order-item/order-item.service';
import { Order, OrderService } from 'src/app/services/order/order.service';
import { Product, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  modalOptions: NgbModalOptions; //modal options such as backdrop, backdropClass
  viewProduct!:Product[];
  pageOfItems: Array<any> = [];
  id!:number;
  quantity!:number;
  productId!:number;
  product!:Product;
  productQuantity!:number;
  order!:Order
  orderItem!:OrderItem|any;//error because of relationship so, any used 
  orderId!:number
  orderedItems!:OrderItem[]
  length!:number
  meal!:string;
  term!:string;
  submitted:boolean=false;


  constructor(private router:Router,private productService:ProductService,private toast:NotificationService,private modalService:NgbModal,private orderService:OrderService,private orderItemService:OrderItemService,private route : ActivatedRoute) 
  {   this.id = this.route.snapshot.params['id'];
    this.modalOptions = {
    backdrop: 'static',
    backdropClass: 'customBackdrop', }
  }



  ngOnInit(): void {
    this.productService.getAllProductByMeal().subscribe( response => {
      console.log(response); 
      this.viewProduct = response.data;
  });


  
  console.log(this.viewProduct[0])
  }


  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    
  }

  addProduct(content:any,id:number){
    this.productId=id;
this.modalService.open(content, this.modalOptions).result.then(
  
      () => {

       
  },
  (reason)=>{
  }//to catch the promise rejection
    );

  }

  getProduct(){
    this.productService.getProductById(this.productId).subscribe((response)=>{
      this.product=response.data;
      console.log(this.product)
    },error=>console.log(error));
  }

  getQuantity(value:any) {
    console.log(value);
    this.productQuantity=value;
    this.modalService.dismissAll();
    this.getProduct();
   this.addOrderItem();
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
        if(response.statusCode==201){
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
