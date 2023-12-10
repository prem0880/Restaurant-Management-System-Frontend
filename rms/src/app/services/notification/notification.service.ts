import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message?:string){
      this.toastr.success(message)
  }
  showFailure(message?:string){
    this.toastr.error(message)
}
showInfo(message?:string){
  this.toastr.info(message)
}

showWarn(message?:string){
  this.toastr.warning(message)
}


}
