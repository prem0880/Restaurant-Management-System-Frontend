import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  viewOrder?:any=[];
  customerId:any;
  

  constructor(private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {
    this.customerId=localStorage.getItem("id");
    this.orderService.getOrderByCustomerId(this.customerId).subscribe((response)=>{
      this.viewOrder=response.data
    },error=>console.log(error.error));
  }

}
