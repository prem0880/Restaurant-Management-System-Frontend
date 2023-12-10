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
  length:number=0;
  constructor(private router:Router,private toast:NotificationService,private orderService:OrderService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.orderService.getAllSuccessOrder().subscribe((response)=>{
      console.log(response.data)
      this.viewOrder=response.data
      this.length=this.viewOrder==null?0:this.viewOrder.length;
    },error=>console.log(error.error));
  }

  approve(vieworder:any){
    console.log(vieworder.id);
    this.orderService.updateOrderStatus(vieworder.id,"Approved").subscribe((response)=>{
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
    this.orderService.updateOrderStatus(vieworder.id,"Denied").subscribe((response)=>{
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
