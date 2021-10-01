import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  viewCustomer:Customer|any;
  customerId:any

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerId=localStorage.getItem('id')
    console.log(this.customerId)
    this.customerService.getCustomerById(this.customerId as any as number).subscribe((response)=>{
      console.log(response.data)
      this.viewCustomer=response.data;
      console.log(this.viewCustomer)
    },error=>console.log(error.error));
  }

}
