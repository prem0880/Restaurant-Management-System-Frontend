import { Component, OnInit } from '@angular/core';
import { Country, CountryService } from 'src/app/services/country/country.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  submitted:boolean=false;
  country!:Country;

  constructor(private countryService:CountryService,private toast:NotificationService) { }

  ngOnInit(): void {
  }

  addCountry(country:Country){
    this.countryService.createCountry(country).subscribe((response)=>{
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
       }
     else{
     this.toast.showFailure(response.message);
     }
    });

  }

}
