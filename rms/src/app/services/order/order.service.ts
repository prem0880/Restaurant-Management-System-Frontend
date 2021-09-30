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

  private baseUrl1 = 'http://localhost:8083';

  constructor(private http:HttpClient) { }

  addOrder(order:Order) :Observable<HttpResponse>{
    return this.http.post(`${this.baseUrl}/add`, order);
  }

  getOrderId(customerId:number):Observable<HttpResponse>
  {
    return this.http.get(`${this.baseUrl}/orderId/${customerId}`)
  }

  addOrderItem(orderItem:OrderItem):Observable<HttpResponse>
  {
    return this.http.post(`${this.baseUrl1}/order-item/add`,orderItem)
  }

  getOrderedItems(orderId:number):Observable<HttpResponse>
  {
    return this.http.get(`${this.baseUrl1}`+'/order-item/get-items/'+`${orderId}`)
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
}
