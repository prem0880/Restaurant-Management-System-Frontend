import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer/customer.service';
import { HttpResponse } from '../response/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  
  private baseUrl = 'http://localhost:8083/address';

  constructor(private http:HttpClient) { }

  addAddress(address:Address) :Observable<HttpResponse>{
    return this.http.post(`${this.baseUrl}/add`, address);
  }

  getAddressByPhone(id:any) :Observable<HttpResponse>{
    return this.http.get<HttpResponse>(`${this.baseUrl}/get/phoneNumber/${id}`);
  }

  getAddressByCustomerId(id:any) :Observable<HttpResponse>{
    return this.http.get<HttpResponse>(`${this.baseUrl}/get/customer/${id}`);
  }

  
}
export class Address{
  id?:number;
  addressLine?:string;
  city?:string;
  pincode?:number;
  state?:any;
  customer?:any;
}
