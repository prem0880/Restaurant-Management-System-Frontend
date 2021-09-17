import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8083/api/category';

  constructor(private http: HttpClient) { }

  createCategory(category : Category){

    return this.http.post(`${this.baseUrl}`, category,{responseType: 'text'});
  }


  getAllCategory() : Observable<any>{
    return this.http.get<Category>(`${this.baseUrl}`);
  }

  deleteCategory(id:number){
    console.log(id);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete(`${this.baseUrl}/${id}`, { headers, responseType: 'text'});
  }

  updateCategory(id:number,category:Category){
    console.log(id);
    console.log(category);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put(`${this.baseUrl}/${id}`, category, { headers, responseType: 'text'});
  }


}
export class Category{
  id?:number;
  name?:string;

}