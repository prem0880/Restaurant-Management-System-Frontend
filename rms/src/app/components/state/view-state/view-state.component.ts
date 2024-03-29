import { Component, OnInit } from '@angular/core';
import { Country, CountryService } from 'src/app/services/country/country.service';
import { State, StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-view-state',
  templateUrl: './view-state.component.html',
  styleUrls: ['./view-state.component.css']
})
export class ViewStateComponent implements OnInit {

  viewCountry !: Country[];
  viewState !: State[];
  pageOfItems: Array<any> = [];
  display:boolean=false;
  constructor(private stateService : StateService, private countryService : CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCountry().subscribe((response)=>{
      this.viewCountry =response.data;
  });
  }

  getState(country:Country) {
    console.log(country.id);
    this.stateService.getStatesByCountry(country.id).subscribe((response)=>{
      this.viewState = response.data;
      this.display=true;
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    
  }
}
