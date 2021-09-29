import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '../response/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'http://localhost:8083/country';

  constructor(private http: HttpClient) { }

  createCountry(country : Country):Observable<HttpResponse>{
    return this.http.post(`${this.baseUrl}/add`, country);
  }
  getAllCountry() : Observable<HttpResponse>{
    return this.http.get<HttpResponse>(`${this.baseUrl}/getAll`);
  }
  deleteCountry(id:number):Observable<HttpResponse>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateCountry(id:number,country:Country):Observable<HttpResponse>{
    return this.http.put(`${this.baseUrl}/update/${id}`, country);
  }

  getCountryById(id:number):Observable<HttpResponse>{
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }
}
export class Country{
  id:any;
  name:any;
  createdOn?:string;
  updatedOn?:string;
}
