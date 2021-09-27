import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) { }

  createCategory(category : Category){

    return this.http.post(`${this.baseUrl}/addCategory`, category,{responseType: 'text'});
  }


  getAllCategory() : Observable<any>{
    return this.http.get<Category>(`${this.baseUrl}/getAllCategory`);
  }

  getCategoryById(id:number){
    return this.http.get(`${this.baseUrl}/getCategory/${id}`);
  }

  deleteCategory(id:number){
    console.log(id);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteCategory/${id}`, { headers, responseType: 'text'});
  }

  updateCategory(id:number,category:Category){
    console.log(id);
    console.log(category);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put(`${this.baseUrl}/updateCategory/${id}`, category, { headers, responseType: 'text'});
  }


}
export class Category{
  id?:number;
  name?:string;
  createdOn?:string;
  updatedOn?:string;
}