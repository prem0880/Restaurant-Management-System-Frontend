import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country, CountryService } from 'src/app/services/country/country.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-manage-country',
  templateUrl: './manage-country.component.html',
  styleUrls: ['./manage-country.component.css']
})
export class ManageCountryComponent implements OnInit {

  viewCountry!:Country[];

  constructor(private router:Router,private toast:NotificationService,private countryService:CountryService) { }

  ngOnInit():any {
    this.reloadData();  
  }

  reloadData(){
    this.countryService.getAllCountry().subscribe((response)=>{
      this.viewCountry=response.data;
    },error=>window.alert(error.error));
  }

  deleteCountry(id:number) {
    this.countryService.deleteCountry(id).subscribe(response => {
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
       }
     else{
     this.toast.showFailure(response.message);
     }
      
      this.reloadData();
      });
  }

  updateCountry(id:number) {
    this.router.navigate(["/updateCountry",id]);
  }
}
