import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  createProduct(product:Product){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.post("http://localhost:8083/api/addProduct", product,{headers, responseType : 'text'} );
  }


  getAllProduct() : Observable<any>{
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Product>("http://localhost:8083/api/getAllProduct");

  }

  deleteProduct(id:number,categoryId:number,mealId:number){
    console.log(id);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete("http://localhost:8083/api/category/"+categoryId+"/meal/"+mealId+"/deleteProduct/" + id,  { headers, responseType: 'text'});
  }

  updateProduct(id:number,product:Product){
    console.log(id);
    console.log(product);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put("http://localhost:8083/api/updateProduct/" + id, product, { headers, responseType: 'text'});
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
  category?:any;
  meal?:any;
}
