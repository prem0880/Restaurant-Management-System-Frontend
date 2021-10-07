import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer/customer.service';
import { HttpResponseStatus } from '../response/HttpResponseStatus';
import { State } from '../state/state.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  
  private baseUrl = 'http://localhost:8083/address';

  constructor(private http:HttpClient) { }

  addAddress(address:Address) :Observable<HttpResponseStatus>{
    return this.http.post(`${this.baseUrl}`, address);
  }

  getAddressByPhone(id:any) :Observable<HttpResponseStatus>{
    return this.http.get<HttpResponseStatus>(`${this.baseUrl}/phoneNumber/${id}`);
  }

  getAddressByCustomerId(id:any) :Observable<HttpResponseStatus>{
    return this.http.get<HttpResponseStatus>(`${this.baseUrl}/customer/${id}`);
  }

  updateAddress(id:any,address:Address):Observable<HttpResponseStatus>{
    return this.http.put(`${this.baseUrl}/${id}`,address);
  }

  getAddressById(id:any) :Observable<HttpResponseStatus>{
    return this.http.get<HttpResponseStatus>(`${this.baseUrl}/${id}`);
  }


  
}
export class Address{
  id!:number;
  addressLine?:string;//rise error in orderDetails.address
  city?:string;
  pincode?:number;
  state?:State;
  customer?:Customer;
  createdOn?:string;
  updatedOn?:string;
}
