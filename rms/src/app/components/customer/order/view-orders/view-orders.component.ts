import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  viewOrder?:any=[];
  constructor(private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrder().subscribe((response)=>{
      console.log(response.data)
      this.viewOrder=response.data
    },error=>console.log(error.error));
  }


}
