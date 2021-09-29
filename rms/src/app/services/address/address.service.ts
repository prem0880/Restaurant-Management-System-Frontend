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
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    const newaddr = {
      addressLine : address.addressLine,
      city : address.city,
      pincode : address.pincode
    }
    return this.http.post(`${this.baseUrl}/add`, newaddr);
  }

  getAddressByPhone(id:any) :Observable<HttpResponse>{
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<HttpResponse>(`${this.baseUrl}/get/${id}`);
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
