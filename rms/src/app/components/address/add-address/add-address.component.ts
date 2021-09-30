import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, AddressService } from 'src/app/services/address/address.service';
import { CountryService } from 'src/app/services/country/country.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  id : any;
  state  :any=[];
  country : any=[];
  constructor(private router : Router, private route: ActivatedRoute, private stateService : StateService, private countryService  :CountryService, private addressService : AddressService) { 
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.countryService.getAllCountry().subscribe((response)=>{
      this.country = response.data;
    })
  }

  getstate(count:any) {
    this.stateService.getStatesByCountry(count).subscribe((response)=>{
      this.state = response.data;
    })
  }


  addAddress(address:Address) {
    address.customer={
      id:Number(this.id)
    };
    address.state={
        id:Number(address.state)
    };
    console.log(address);
    this.addressService.addAddress(address).subscribe((response)=>{
      console.log(address);
      window.alert(response.message);
      this.gotoList();
    },
    error => window.alert(error.error)
    );

  }
  gotoList() {
    window.alert("Sign IN Now");
    this.router.navigate(['/login']);
  }

}
