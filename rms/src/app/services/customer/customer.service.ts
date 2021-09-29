import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '../response/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8083/customer';

  constructor(private http:HttpClient) { }

  createCustomer(customer:Customer):Observable<HttpResponse>{
    return this.http.post(`${this.baseUrl}/add`, customer);
  }

  getAllCustomer():Observable<HttpResponse>{
    return this.http.get<HttpResponse>(`${this.baseUrl}/getAll`);
  }

  getCustomerById(id:any):Observable<HttpResponse>{
    return this.http.get<HttpResponse>(`${this.baseUrl}/get/${id}`);
  }

  updateCustomer(id:number,customer:Customer):Observable<HttpResponse>{
    return this.http.put(`${this.baseUrl}/update/${id}`, customer);
  }

  
}

export class Customer{
  phoneNumber?:number;
  name?:string;
  email?:string;
  password?:string;
  createdOn?:string;
  updatedOn?:string;
}
