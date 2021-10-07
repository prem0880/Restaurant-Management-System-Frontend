import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseStatus } from '../response/HttpResponseStatus';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private baseUrl = 'http://localhost:8083/meal';

  constructor(private http: HttpClient) { }

  createMeal(meal: Meal): Observable<HttpResponseStatus> {
    return this.http.post(`${this.baseUrl}`, meal);
  }


  getAllMeal(): Observable<HttpResponseStatus> {
    return this.http.get<HttpResponseStatus>(`${this.baseUrl}`);
  }

  getMealById(id:number): Observable<HttpResponseStatus>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getMealByName(meal:string): Observable<HttpResponseStatus>{
    return this.http.get(`${this.baseUrl}/name/${meal}`);
  }

  deleteMeal(id: number): Observable<HttpResponseStatus> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateMeal(id: number, meal: Meal): Observable<HttpResponseStatus> {
    return this.http.put(`${this.baseUrl}/${id}`, meal);
  }
}
export class Meal {
  id?: number;
  name?: string;
  createdOn?:string;
  updatedOn?:string;
}