import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../address/address.service';
import { Customer } from '../customer/customer.service';
import { HttpResponseStatus } from '../response/HttpResponseStatus';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8083/order';

  constructor(private http:HttpClient) { }

  addOrder(order:Order) :Observable<HttpResponseStatus>{
    return this.http.post(`${this.baseUrl}`, order);
  }

  getOrderId(customerId:number):Observable<HttpResponseStatus>
  {
    return this.http.get(`${this.baseUrl}/order/${customerId}`)
  }

  getOrderByCustomerId(customerId:number):Observable<HttpResponseStatus>
  {
    return this.http.get(`${this.baseUrl}/customer/${customerId}`)
  }

  getAllOrder():Observable<HttpResponseStatus>
  {
    return this.http.get(`${this.baseUrl}`)
  }
  
  getOrderById(orderId:number):Observable<HttpResponseStatus> 
  {
    return this.http.get(`${this.baseUrl}/${orderId}`)
  }

  updateOrder(orderId:number,order:object):Observable<HttpResponseStatus>
  {
    return this.http.put(`${this.baseUrl}/${orderId}`,order)
  }

  updateOrderStatus(orderId:number,status:string):Observable<HttpResponseStatus>
  {
    return this.http.put(`${this.baseUrl}/${orderId}/${status}`,"")
  }

}
export class Order{
  id!:number;
  date?:Date;
  totalPrice?:number;
  modeOfPayment?:string;
  status?:string;
  customer!:Customer;
  address!:Address;
  createdOn?:string;
  updatedOn?:string;
}
