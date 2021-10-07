import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address, AddressService } from 'src/app/services/address/address.service';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';
import { Order, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerMail:any;
  addressId: any;
  order!: Order;
  customerId!:number;

  constructor(private router:Router,private customerService:CustomerService,private addressService:AddressService,private orderService:OrderService) { }

  ngOnInit(): void {
    this.customerMail=localStorage.getItem("email");
    this.customerService.getCustomerByMail(this.customerMail as any as string).subscribe((response)=>{
      console.log(response.data)
      if(response.statusCode==200){
      this.customerId=response.data;
      this.setId(response.data)
      console.log(this.customerId)
      }
    });
    console.log(this.customerId);
  }
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['login']);
  }

  setId(response:any){
      this.customerId=response;
      localStorage.setItem("id",this.customerId as any as string)
      console.log(this.customerId)
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
