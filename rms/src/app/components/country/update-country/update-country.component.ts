import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country, CountryService } from 'src/app/services/country/country.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {

  submitted:boolean=false;
  id?:any;
  country?:any;

  constructor(private router:Router,private route:ActivatedRoute,private toast:NotificationService,private countryService:CountryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.countryService.getCountryById(this.id).subscribe((response)=>{
      this.country=response.data;
    }, error => console.log(error));
  }

  updateCountry(country:Country) {
    this.countryService.updateCountry(this.id,country).subscribe((response) => {
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
       }
     else{
     this.toast.showFailure(response.message);
     }

      this.goToList();
    });
  }

  goToList(){
    this.router.navigate(['manageCountry']);
  }

}
