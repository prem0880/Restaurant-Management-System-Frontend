import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category/category.service';
import { Meal } from '../meal/meal.service';
import { HttpResponseStatus } from '../response/HttpResponseStatus';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8083/product';

  constructor(private http : HttpClient) { }

  createProduct(product:Product): Observable<HttpResponseStatus>{
    return this.http.post(`${this.baseUrl}`, product);
  }

  getAllProduct() : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getProductById(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getProductByMeal(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/meal/${id}`);
  }

  getProductByTypeAndCategory(id:number,type:string): Observable<any>{
    return this.http.get(`${this.baseUrl}/category/${id}/type/${type}`);
  }

  deleteProduct(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateProduct(id:number,product:Product): Observable<HttpResponseStatus>{
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

}
export class Product{
  id!:number;
  name?:string;
  image?:string;
  type?:string;
  price?:number;
  description?:string;
  tax?:number;
  category!:Category;
  meal!:Meal;
  createdOn?:string;
  updatedOn?:string;
}
