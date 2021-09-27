import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseUrl = 'http://localhost:8083/api';

  constructor(private http : HttpClient) { }

  createState(state : State) {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    const stateObj = {
      name : state.name,
      country:{
        id:state.country
      }
    }
    return this.http.post(`${this.baseUrl}/addState`,stateObj ,{headers, responseType : 'text'} );
  }
  
  getStatesByCountry(id:number){
    return this.http.get<State>(`${this.baseUrl}/getState/${id}`);
  }
}
export class State {
  id?:number;
  name?:string;
  country?:any;
  createdOn?:string;
  updatedOn?:string;
}
