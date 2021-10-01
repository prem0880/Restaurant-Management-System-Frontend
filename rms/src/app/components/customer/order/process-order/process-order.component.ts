import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address, AddressService } from 'src/app/services/address/address.service';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';
import { Order, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  public order:Order|any 
  public orderDetail:Order|any
  public orderDetails:Order|any
  public customerId:Number|any
  public address:Address|any
  public customer:Customer|any
  constructor(private orderService:OrderService,private router:Router,private addressService:AddressService,private customerService:CustomerService) { }
  ProcessOrderForm=new FormGroup({
    modeOfPayment:new FormControl('',Validators.required),
  })
  ngOnInit(): void {
    this.order=localStorage.getItem('order')
    this.orderDetail=JSON.parse(this.order)
    console.log(this.orderDetail)
    this.customerId=localStorage.getItem('id')
    console.log(this.customerId)
    this.customerService.getCustomerById(this.customerId).subscribe(response=>{
      this.customer=response.data
      console.log(this.customer)
      this.addressService.getAddressByPhone(this.customer.phoneNumber as any as number).subscribe(response=>{
        this.address=response.data
        console.log(this.address)
        console.log(this.address[0].id as any as number)
        console.log(this.address[0].addressLine)
        console.log(this.address[0].city)
        console.log(this.address[0].state.name)
        console.log(this.address[0].pincode)
      })
    })
    
  }
  processOrder()
  {
    this.orderDetails=new Order();
    this.orderDetails.modeOfPayment=this.ProcessOrderForm.get('modeOfPayment')?.value;
    this.orderDetails.status="SUCCESS";
    this.orderDetails.totalPrice=this.orderDetail.totalPrice
    this.orderDetails.customer={
      id:this.customerId
    };
    this.orderDetails.address={
      id:this.address[0].id as any as number
    };
    this.orderService.updateOrder(this.orderDetail.id,this.orderDetails).subscribe(response=>{
      console.log(response.message)
      window.alert(response.message)
      window.alert("Your Transaction has been successful! You will be redirected to home page")
      this.router.navigate(['dashboard']);
    })
  }

  get modeOfPayment(){
    return this.ProcessOrderForm.get('modeOfPayment');
  }
}
