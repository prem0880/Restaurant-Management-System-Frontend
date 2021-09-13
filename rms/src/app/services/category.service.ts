import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  getAllCategory() : Observable<any>{
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Category>("http://localhost:8083/api/category");
  }
}
export class Category{
  id?:number;
  name?:string;
  product?:any;

}