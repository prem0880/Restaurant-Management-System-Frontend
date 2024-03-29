import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  viewOrder!:Order[];
  customerId:any;//any used for local storage
  pageOfItems: Array<any> = [];
  term!:string;

  constructor(private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {
    this.customerId=localStorage.getItem("id");
    this.orderService.getOrderByCustomerId(this.customerId).subscribe((response)=>{
      console.log(response.data)
      this.viewOrder=response.data
    },error=>console.log(error.error));
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    
  }
}
