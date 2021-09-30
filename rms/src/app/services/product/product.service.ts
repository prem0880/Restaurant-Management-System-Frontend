import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category/category.service';
import { Meal } from '../meal/meal.service';
import { HttpResponse } from '../response/HttpResponse';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8083/product';

  constructor(private http : HttpClient) { }

  createProduct(product:Product): Observable<HttpResponse>{
    return this.http.post(`${this.baseUrl}/add`, product);
  }

  getAllProduct() : Observable<HttpResponse>{
    return this.http.get<HttpResponse>(`${this.baseUrl}/getAll`);
  }

  getProductById(id:number): Observable<HttpResponse>{
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  getProductByTypeAndCategory(id:number,type:string): Observable<HttpResponse>{
    return this.http.get(`${this.baseUrl}/category/${id}/type/${type}`);
  }

  deleteProduct(id:number): Observable<HttpResponse>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateProduct(id:number,product:Product): Observable<HttpResponse>{
    return this.http.put(`${this.baseUrl}/update/${id}`, product);
  }

}
export class Product{
  id?:number;
  name?:string;
  image?:string;
  type?:string;
  price?:number;
  description?:string;
  tax?:number;
  category?:Category;
  meal?:Meal;
  createdOn?:string;
  updatedOn?:string;
}
