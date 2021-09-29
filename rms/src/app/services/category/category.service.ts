import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '../response/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8083/category';

  constructor(private http: HttpClient) { }

  createCategory(category : Category):Observable<HttpResponse>{
    return this.http.post(`${this.baseUrl}/add`, category);
  }

  getAllCategory() : Observable<HttpResponse>{
    return this.http.get<HttpResponse>(`${this.baseUrl}/getAll`);
  }

  getCategoryById(id:number): Observable<HttpResponse>{
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  deleteCategory(id:number): Observable<HttpResponse>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateCategory(id:number,category:Category): Observable<any>{
    return this.http.put(`${this.baseUrl}/update/${id}`, category);
  }


}
export class Category{
  id?:number;
  name?:string;
  createdOn?:string;
  updatedOn?:string;
}
