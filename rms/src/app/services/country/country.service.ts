import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseStatus } from '../response/HttpResponseStatus';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'http://localhost:8083/country';

  constructor(private http: HttpClient) { }

  createCountry(country : Country):Observable<HttpResponseStatus>{
    return this.http.post(`${this.baseUrl}`, country);
  }
  getAllCountry() : Observable<HttpResponseStatus>{
    return this.http.get<HttpResponseStatus>(`${this.baseUrl}`);
  }
  deleteCountry(id:number):Observable<HttpResponseStatus>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateCountry(id:number,country:Country):Observable<HttpResponseStatus>{
    return this.http.put(`${this.baseUrl}/${id}`, country);
  }

  getCountryById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
export class Country{
  id!:number;
  name!:string;
  createdOn?:string;
  updatedOn?:string;
}
