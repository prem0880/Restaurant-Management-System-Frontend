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

  isValidEmail:boolean=true;
  isValidPhoneNumber:boolean=true;
  constructor(private customerService:CustomerService,private toast:NotificationService, private router : Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  signUp(customer:Customer) {
    console.log(customer);
    this.customerService.createCustomer(customer).subscribe((response) => {
      const login = {
        email : customer.email,
        role : "Customer",
        password :response.data.password
      }
      console.log(response.data)
      console.log(response.data.password)
      if(response.statusCode==201){
        this.toast.showSuccess(response.message);
       }
     else{
     this.toast.showFailure(response.message);
     }
      console.log(login);
      this.loginService.save(login).subscribe((response) => {
        console.log(response);
      });
      this.router.navigate(["addAddress",response.data.id]);
    });
  }

  onCheck(mail:string,phone:number){
    console.log(mail+" "+phone)
   this.onCheckMail(mail) ;
   this.onCheckPhone(phone);
   return this.isValidEmail && this.isValidPhoneNumber ;
  }
  onCheckMail(mail:string):boolean{
      this.customerService.getCustomerByMail(mail).subscribe((response)=>{
        console.log(response)
        if(response.data==null){
          this.isValidEmail=true;
          return true
        }
        else{
          this.isValidEmail=false
          return false;
        }
      },error=> {
        this.isValidEmail=true;
        return true});
      return false;
  }

  onCheckPhone(phoneNumber:number):boolean{
    this.customerService.getCustomerByPhone(phoneNumber ).subscribe((response)=>{
      console.log(response)
      if(response.data==null){
        console.log(response)
        this.isValidPhoneNumber=true;
        return true
      }
      else{
        this.isValidPhoneNumber=false
        return false;
      }
    },error=> {
      console.log(error);
      this.isValidPhoneNumber=true;
      return true});
    return false;
}

}
