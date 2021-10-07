import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  viewCustomer!:Customer;
  customerId:any;//any for local storage

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerId=localStorage.getItem('id')
    console.log(this.customerId)
    this.goToList();
  }
  goToList(){
    this.customerService.getCustomerById(this.customerId).subscribe((response)=>{
      console.log(response.data)
      this.viewCustomer=response.data;
      console.log(this.viewCustomer.name)
    },error=>console.log(error.error));
  }

}
