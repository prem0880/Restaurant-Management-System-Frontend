import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseStatus } from '../response/HttpResponseStatus';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8083/category';

  constructor(private http: HttpClient) { }

  createCategory(category : Category):Observable<HttpResponseStatus>{
    return this.http.post(`${this.baseUrl}`, category);
  }

  getAllCategory() : Observable<HttpResponseStatus>{
    return this.http.get<HttpResponseStatus>(`${this.baseUrl}`);
  }

  getCategoryById(id:number): Observable<HttpResponseStatus>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteCategory(id:number): Observable<HttpResponseStatus>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateCategory(id:number,category:Category): Observable<HttpResponseStatus>{
    return this.http.put(`${this.baseUrl}/${id}`, category);
  }


}
export class Category{
  id?:number;
  name?:string;
  createdOn?:string;
  updatedOn?:string;
}
