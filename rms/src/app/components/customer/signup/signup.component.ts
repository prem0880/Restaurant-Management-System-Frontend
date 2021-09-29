import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private customerService:CustomerService, private router : Router) { }

  ngOnInit(): void {
  }

  signUp(customer:Customer) {
    console.log(customer);
    this.customerService.createCustomer(customer).subscribe((response) => {
      window.alert(response.message);
      this.router.navigate(["addAddress",customer.phoneNumber]);
    });
  }
}
