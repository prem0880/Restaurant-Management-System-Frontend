import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';
import { LoginService } from 'src/app/services/login/login.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private customerService:CustomerService,private toast:NotificationService, private router : Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  signUp(customer:Customer) {
    console.log(customer);
    this.customerService.createCustomer(customer).subscribe((response) => {
      const login = {
        email : customer.email,
        role : "Customer",
        password : customer.phoneNumber
      }
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
       }
     else{
     this.toast.showFailure(response.message);
     }
      console.log(login);
      this.loginService.save(login).subscribe((response) => {
        console.log(response);
      });
      this.router.navigate(["addAddress",response.data]);
    });
  }
}
