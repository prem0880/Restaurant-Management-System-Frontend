import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { LoginService } from 'src/app/services/login/login.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private customerService:CustomerService,private toast:NotificationService,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onLogin(credential:any){
    this.loginService.loginValidation(credential).subscribe((response)=>{
            console.log(response.data);
            if(response.statusCode==200){
            if(response.data=="Admin"){
                 this.toast.showSuccess("Welcome admin!");
                 this.router.navigate(['admin']);
            }else if(response.data=="Customer"){
                  console.log(response.data);
                  this.toast.showSuccess("Logged In Successfully!");
                  localStorage.setItem("email",credential.email);
                  this.router.navigate(['/viewProduct']);
            }else{
              this.toast.showFailure("Incorrect Credentials");
            }
          }else{
            this.toast.showFailure("Login attempt failed!");
          }

    });

  
    }
        
  

}
