import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../country/country.service';
import { HttpResponseStatus } from '../response/HttpResponseStatus';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseUrl = 'http://localhost:8083/state';

  constructor(private http : HttpClient) { }

  createState(state : State):Observable<any> {
    const stateObj = {
      name : state.name,
      country:{
        id:state.country
      }
    }
    return this.http.post(`${this.baseUrl}`,stateObj );
  }
  
  getStatesByCountry(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
export class State {
  id?:number;
  name?:string;
  country?:Country;
  createdOn?:string;
  updatedOn?:string;
}
