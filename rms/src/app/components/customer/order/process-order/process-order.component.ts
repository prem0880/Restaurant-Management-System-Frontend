import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address, AddressService } from 'src/app/services/address/address.service';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Order, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  order:Order|any //any used because of local storage 
  orderDetail!:Order
  orderDetails!:Order
  customerId:Number|any//any used because of local storage
  address:Address=new Address();
  customer:Customer=new Customer();
  
  constructor(private orderService:OrderService,private toast:NotificationService,private router:Router,private addressService:AddressService,private customerService:CustomerService) { }
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
        console.log(this.address.id as any as number)
        console.log(this.address.addressLine)
        console.log(this.address.city)
        console.log(this.address.pincode)
      })
    })
    
  }
  processOrder()
  {
    this.orderDetails=new Order();
    this.orderDetails.modeOfPayment=this.ProcessOrderForm.get('modeOfPayment')?.value;
    this.orderDetails.status="Success";
    this.orderDetails.totalPrice=this.orderDetail.totalPrice
    this.orderDetails.customer={
      id:this.customerId
    };
    this.orderDetails.address={
      id:this.address.id as any as number
    };
    this.orderService.updateOrder(this.orderDetail.id,this.orderDetails).subscribe(response=>{
      console.log(response.message)
      if(response.statusCode==200){
        this.toast.showSuccess("Your Transaction has been successful");
        this.router.navigate(['/viewOrders']);
       }
     else{
     this.toast.showFailure(response.message);
     }

    })
  }

  get modeOfPayment(){
    return this.ProcessOrderForm.get('modeOfPayment');
  }
}
