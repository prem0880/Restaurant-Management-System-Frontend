import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http : HttpClient) { }

  createMeal(meal:Meal){
    return this.http.post("http://localhost:8083/api/addMeal", meal, {responseType: 'text'});
  }
  getAllMeal() : Observable<any>{
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Meal>("http://localhost:8083/api/getAllMeal");
  }

  deleteMeal(id:number){
    console.log(id);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete("http://localhost:8083/api/deleteMeal/" + id,  { headers, responseType: 'text'});
  }

  updateMeal(id:number,meal:Meal){
    console.log(id);
    console.log(meal);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put("http://localhost:8083/api/updateMeal/" + id, meal, { headers, responseType: 'text'});
  }
}
export class Meal{
  id?:number;
  name?:string;
}