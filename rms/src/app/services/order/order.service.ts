import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../address/address.service';
import { Customer } from '../customer/customer.service';
import { OrderItem } from '../order-item/order-item';
import { HttpResponse } from '../response/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8083/order';

  constructor(private http:HttpClient) { }

  addOrder(order:Order) :Observable<HttpResponse>{
    return this.http.post(`${this.baseUrl}/add`, order);
  }

  getOrderId(customerId:number):Observable<HttpResponse>
  {
    return this.http.get(`${this.baseUrl}/orderId/${customerId}`)
  }

  getOrderByCustomerId(customerId:number):Observable<HttpResponse>
  {
    return this.http.get(`${this.baseUrl}/customer/${customerId}`)
  }

  getAllOrder():Observable<HttpResponse>
  {
    return this.http.get(`${this.baseUrl}/getAll`)
  }

  addOrderItem(orderItem:OrderItem):Observable<HttpResponse>
  {
    return this.http.post(`http://localhost:8083/order-item/add`,orderItem)
  }

  getOrderedItems(orderId:number):Observable<HttpResponse>
  {
    return this.http.get(`http://localhost:8083/order-item/get-items/${orderId}`)
  }
  getOrderById(orderId:number):Observable<HttpResponse> 
  {
    return this.http.get(`${this.baseUrl}/id/${orderId}`)
  }

  updateOrder(orderId:number,order:object):Observable<HttpResponse>
  {
    return this.http.put(`${this.baseUrl}`+'/update-order/'+`${orderId}`,order)
  }

}
export class Order{
  id?:number;
  date?:Date;
  totalPrice?:number;
  modeOfPayment?:string;
  status?:string;
  customer?:Customer;
  address?:Address;
  createdOn?:string;
  updatedOn?:string;
}
