import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  toggleOldPassword:boolean=true;
  toggleNewPassword:boolean=true;
  email:any;
  setToggleOldPassword(){
    this.toggleOldPassword=!this.toggleOldPassword;
  }
  setToggleNewPassword(){
    this.toggleNewPassword=!this.toggleNewPassword;
  }


  constructor(private loginService:LoginService,private router:Router,private toaster:NotificationService) { }

  ngOnInit(): void {
  }

  onUpdate(credential:any){
    this.email=localStorage.getItem('email');
    const login={
        email:this.email,
        password:credential.oldpassword,
    }
    console.log(credential.oldpassword+" "+credential.newpassword)
    console.log(this.email);
    console.log(login.email+" "+login.password)

    this.loginService.updatePassword(login,credential.newpassword as any as string).subscribe((response)=>{
        if(response.statusCode==200){
          this.toaster.showSuccess(response.message);
          this.router.navigate(['/dashboard']);
        }
        else{
          this.toaster.showFailure(response.message);
        }
    });

  }


}
