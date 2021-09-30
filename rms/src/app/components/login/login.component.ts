import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  onLogin(credential:any){
    if(credential.email=='admin@gmail.com' && credential.password=='admin'){
      window.alert("Welcome admin!");
      this.router.navigate(['admin']);
    } else if(credential.email=='admin@gmail.com' && credential.password!='admin'){
      window.alert("admin login failed");
    }
    else{
      this.customerService.loginValidation(credential).subscribe(response=>{
        console.log(response);
        if(response.data!=null){
          console.log(response.data);
          window.alert("Welcome customer!");
          localStorage.setItem("id",response.data);
          this.router.navigate(['dashboard']);
        }else{
          window.alert("Login attempt failed!");
        }
    });
    }
        
  }

}
