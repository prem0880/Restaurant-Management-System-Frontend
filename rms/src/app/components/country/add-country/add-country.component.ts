import { Component, OnInit } from '@angular/core';
import { Country, CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  submitted:boolean=false;
  country:any;

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
  }

  addCountry(country:Country){
    this.countryService.createCountry(country).subscribe((data)=>{
      window.alert(data);
    },error=>window.alert(error.error));

  }

}
