import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country, CountryService } from 'src/app/services/country/country.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {

  country !: Country[];
  constructor(private service : StateService,private toast:NotificationService, private countryService : CountryService,private router:Router) { }

  ngOnInit(): void {
    this.countryService.getAllCountry().subscribe((response)=>{
      this.country = response.data;
    })
  }
  addState(state:any) {
    this.service.createState(state).subscribe((response)=>{
      if(response.statusCode==200){
        this.toast.showSuccess(response.message);
   }
  else{
     this.toast.showFailure(response.message);
   }
      this.gotoList();
    });
  }
  gotoList() {
    this.router.navigate(['/viewState']);
  }

}
