import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Country, CountryService } from 'src/app/services/country/country.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-manage-country',
  templateUrl: './manage-country.component.html',
  styleUrls: ['./manage-country.component.css']
})
export class ManageCountryComponent implements OnInit {
  modalOptions: NgbModalOptions; //modal options such as backdrop, backdropClass
  viewCountry!:Country[];
  pageOfItems: Array<any> = [];
  term!:string;

  constructor(private router:Router,private toast:NotificationService,private modalService:NgbModal,private countryService:CountryService) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop', }
   }

  ngOnInit():any {
    this.reloadData();  
  }

  reloadData(){
    this.countryService.getAllCountry().subscribe((response)=>{
      if(response.statusCode==200){
      this.viewCountry=response.data;
      }
    
    });
  }




  deleteCountry(content: any, id: number) {

    this.modalService.open(content, this.modalOptions).result.then(

      () => {

        //once modal is resolved, then we call deleteEmployeeById of employee service

        this.countryService.deleteCountry(id).subscribe(response => {
          if(response.statusCode==200){
            this.toast.showSuccess(response.message);
           }
         else{
         this.toast.showFailure(response.message);
         }
          
          this.reloadData();
          },error=>{
            if(error.data==null)
            this.toast.showFailure("This action can't be performed,Since it has dependencies");
          }
          );
      },

      (reason) => {} //to catch the promise rejection

    );

  }

  updateCountry(id:number) {
    this.router.navigate(["/updateCountry",id]);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    
  }
}
