import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  createCategory(category : Category){
    return this.http.post("http://localhost:8083/api/addCategory", category, {responseType: 'text'});
  }


  getAllCategory() : Observable<any>{
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Category>("http://localhost:8083/api/getAllCategory");
  }

  getCategoryById(id:number):Observable<any>{
    return this.http.get("http://localhost:8083/api/getCategory/" + id);
  }

  deleteCategory(id:number){
    console.log(id);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete("http://localhost:8083/api/deleteCategory/" + id,  { headers, responseType: 'text'});
  }

  updateCategory(id:number,category:Category){
    console.log(id);
    console.log(category);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put("http://localhost:8083/api/updateCategory/" + id, category, { headers, responseType: 'text'});
  }


}
export class Category{
  id?:number;
  name?:string;

}