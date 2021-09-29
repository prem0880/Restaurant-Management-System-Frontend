import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country, CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {

  submitted:boolean=false;
  id?:any;
  country?:any;

  constructor(private router:Router,private route:ActivatedRoute,private countryService:CountryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.countryService.getCountryById(this.id).subscribe((response)=>{
      this.country=response.data;
    }, error => console.log(error));
  }

  updateCountry(country:Country) {
    this.countryService.updateCountry(this.id,country).subscribe((response) => {
      window.alert(response.message);
      this.goToList();
    }, error => window.alert(error.error));
  }

  goToList(){
    this.router.navigate(['manageCountry']);
  }

}
