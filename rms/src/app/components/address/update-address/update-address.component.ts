import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address, AddressService } from 'src/app/services/address/address.service';
import { Country, CountryService } from 'src/app/services/country/country.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { State, StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  address:Address=new Address();
  customerId:any;//any because of local storage string
  state  !:State[];
  country !: Country[];

  constructor(private addressService:AddressService,private router:Router,private stateService : StateService,private toast:NotificationService, private countryService  :CountryService) { }

  ngOnInit(): void {
    this.customerId=localStorage.getItem('id')
    console.log(this.customerId)
    this.addressService.getAddressByCustomerId(this.customerId as any as number).subscribe((response)=>{
      console.log(response.data)
      this.addressService.getAddressById(response.data).subscribe((response)=>{
          this.address=response.data;
          console.log(this.address)
        });
      
  },error=>window.alert(error.error));
      this.getCountry();
  }

  getCountry(){
  this.countryService.getAllCountry().subscribe((response)=>{
    this.country = response.data;
  })
  }

  getState(count:any) {
    this.stateService.getStatesByCountry(count).subscribe((response)=>{
      this.state = response.data;
    })
  }
  updateAddress(updatedAddress:Address) {
    console.log(updatedAddress)
    console.log(this.address.id)
    updatedAddress.customer={
      id:Number(this.customerId)
    };
    console.log(updatedAddress);
    this.addressService.updateAddress(this.address.id,updatedAddress).subscribe((response) => {
      console.log(response.message);
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
        this.router.navigate(['dashboard']);
       }
     else{
     this.toast.showFailure(response.message);
     }
    });
  }

}
