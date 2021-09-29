import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '../response/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseUrl = 'http://localhost:8083/state';

  constructor(private http : HttpClient) { }

  createState(state : State):Observable<HttpResponse> {
    const stateObj = {
      name : state.name,
      country:{
        id:state.country
      }
    }
    return this.http.post(`${this.baseUrl}/add`,stateObj );
  }
  
  getStatesByCountry(id:number):Observable<HttpResponse>{
    return this.http.get<HttpResponse>(`${this.baseUrl}/get/${id}`);
  }
}
export class State {
  id?:number;
  name?:string;
  country?:any;
  createdOn?:string;
  updatedOn?:string;
}
