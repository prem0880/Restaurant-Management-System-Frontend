import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country/country.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {

  country : any=[];
  constructor(private service : StateService, private countryService : CountryService,private router:Router) { }

  ngOnInit(): void {
    this.countryService.getAllCountry().subscribe((data)=>{
      this.country = data;
    })
  }
  addState(state:any) {
    this.service.createState(state).subscribe((data)=>{
      window.alert(data);
      this.gotoList();
    },
    error => window.alert(error.error)
    );
  }
  gotoList() {
    this.router.navigate(['/viewstate']);
  }

}
