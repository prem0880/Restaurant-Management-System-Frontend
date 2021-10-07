import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseStatus } from '../response/HttpResponseStatus';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8083/customer';

  constructor(private http:HttpClient) { }

  createCustomer(customer:Customer):Observable<HttpResponseStatus>{
    return this.http.post(`${this.baseUrl}`, customer);
  }

  getAllCustomer():Observable<HttpResponseStatus>{
    return this.http.get<HttpResponseStatus>(`${this.baseUrl}`);
  }

  getCustomerById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCustomerByMail(email:any):Observable<HttpResponseStatus>{
    return this.http.get<HttpResponseStatus>(`${this.baseUrl}/mail/${email}`);
  }


  updateCustomer(id:number,customer:Customer):Observable<HttpResponseStatus>{
    return this.http.put(`${this.baseUrl}/${id}`, customer);
  }
  
}

export class Customer{
  id?: number;
  phoneNumber?:number;
  name?:string;
  email?:string;
  password?:string;
  createdOn?:string;
  updatedOn?:string;
  // constructor(id:number){
  //   this.id=id
  // }
}
