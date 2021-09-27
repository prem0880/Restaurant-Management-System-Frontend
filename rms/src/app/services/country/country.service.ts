import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) { }

  createCountry(country : Country){
    return this.http.post(`${this.baseUrl}/addCountry`, country,{responseType: 'text'});
  }
  getAllCountry() : Observable<any>{
    return this.http.get<Country>(`${this.baseUrl}/getAllCountry`);
  }
  deleteCountry(id:number){
    console.log(id);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteCountry/${id}`, { headers, responseType: 'text'});
  }

  updateCountry(id:number,country:Country){
    console.log(id);
    console.log(country);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put(`${this.baseUrl}/updateCountry/${id}`, country, { headers, responseType: 'text'});
  }

  getCountryById(id:number){
    return this.http.get(`${this.baseUrl}/getCountry/${id}`);
  }
}
export class Country{
  id:any;
  name:any;
  createdOn?:string;
  updatedOn?:string;
}
