import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Order, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  viewOrder!:Order[];
  constructor(private router:Router,private toast:NotificationService,private orderService:OrderService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.orderService.getAllOrder().subscribe((response)=>{
      console.log(response.data)
      this.viewOrder=response.data
    },error=>console.log(error.error));
  }

  approve(vieworder:any){
    console.log(vieworder.id);
    console.log("approve")
    this.orderService.updateOrderStatus(vieworder.id,"approve").subscribe((response)=>{
        if(response.statusCode==200){
          this.toast.showSuccess(response.message)
          this.reload();
        }
        else{
          this.toast.showFailure(response.message);
          this.reload();
       }
    });
  }
  deny(vieworder:any){
    console.log(vieworder.id);
    console.log("deny")
    this.orderService.updateOrderStatus(vieworder.id,"deny").subscribe((response)=>{
      if(response.statusCode==200){
        this.toast.showSuccess(response.message)
        this.reload();
      }
      else{
        this.toast.showFailure(response.message);
        this.reload();
     }
  });

  }


}
