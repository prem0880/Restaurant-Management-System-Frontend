import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseStatus } from '../response/HttpResponseStatus';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseUrl = 'http://localhost:8083/state';

  constructor(private http : HttpClient) { }

  createState(state : State):Observable<HttpResponseStatus> {
    const stateObj = {
      name : state.name,
      country:{
        id:state.country
      }
    }
    return this.http.post(`${this.baseUrl}`,stateObj );
  }
  
  getStatesByCountry(id:number):Observable<HttpResponseStatus>{
    return this.http.get<HttpResponseStatus>(`${this.baseUrl}/${id}`);
  }
}
export class State {
  id?:number;
  name?:string;
  country?:any;
  createdOn?:string;
  updatedOn?:string;
}
