import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  viewCustomer?:any[];

  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe((response)=>{
      this.viewCustomer=response.data;
    },error=>console.log(error.error));
  }

}
