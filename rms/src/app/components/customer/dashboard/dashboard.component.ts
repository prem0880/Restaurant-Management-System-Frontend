import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address, AddressService } from 'src/app/services/address/address.service';
import { Customer } from 'src/app/services/customer/customer.service';
import { Order, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerId:any;
  addressId: any;
  order!: Order;
 
  constructor(private router:Router,private addressService:AddressService,private orderService:OrderService) { }

  ngOnInit(): void {
    this.customerId=localStorage.getItem("id");
    localStorage.setItem("loginTime",JSON.stringify(new Date()));
    console.log(localStorage.getItem("loginTime"));
    console.log(this.customerId);
  }
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['login']);
  }

  addorderbutton() {
    this.order=new Order();
    this.addressService.getAddressByCustomerId(this.customerId).subscribe((response)=>{
      this.addressId=response.data;
      console.log(this.addressId);
      this.order.address={
        id:Number(this.addressId)
      };
      this.order.customer={
        id:this.customerId
      };
      this.orderService.addOrder(this.order).subscribe(response=>{
        this.router.navigate(["addOrder",this.customerId]);
    })
    })
}
}
