import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../order/order.service';
import { Product } from '../product/product.service';
import { HttpResponseStatus } from '../response/HttpResponseStatus';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private baseUrl = 'http://localhost:8083/order-item';

  constructor(private http:HttpClient) { }

  addOrderItem(orderItem:OrderItem):Observable<HttpResponseStatus>
  {
    return this.http.post(`${this.baseUrl}`,orderItem)
  }

  getOrderedItems(orderId:number):Observable<HttpResponseStatus>
  {
    return this.http.get(`${this.baseUrl}/${orderId}`)
  }
}
export class OrderItem {
  id?:number;
  quantity?:number;
  price?:number;
  order?:Order;
  product?:Product;
}