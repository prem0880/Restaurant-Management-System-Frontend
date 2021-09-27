import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-manage-country',
  templateUrl: './manage-country.component.html',
  styleUrls: ['./manage-country.component.css']
})
export class ManageCountryComponent implements OnInit {

  viewCountry?:any=[];

  constructor(private router:Router,private countryService:CountryService) { }

  ngOnInit():any {
    this.reloadData();  
  }

  reloadData(){
    this.countryService.getAllCountry().subscribe((data)=>{
      this.viewCountry=data;
    },error=>window.alert(error.error));
  }

  deleteCountry(id:number) {
    this.countryService.deleteCountry(id).subscribe(response => {
        window.alert(response);
        this.reloadData();
      },error =>  window.alert(error.error));
  }

  updateCountry(id:number) {
    this.router.navigate(["/updateCountry",id]);
  }
}
