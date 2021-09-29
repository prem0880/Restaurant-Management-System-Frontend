import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '../response/HttpResponse';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private baseUrl = 'http://localhost:8083/meal';

  constructor(private http: HttpClient) { }

  createMeal(meal: Meal): Observable<HttpResponse> {
    return this.http.post(`${this.baseUrl}/add`, meal);
  }


  getAllMeal(): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`${this.baseUrl}/getAll`);
  }

  getMealById(id:number): Observable<HttpResponse>{
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  deleteMeal(id: number): Observable<HttpResponse> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateMeal(id: number, meal: Meal): Observable<HttpResponse> {
    return this.http.put(`${this.baseUrl}/update/${id}`, meal);
  }
}
export class Meal {
  id?: number;
  name?: string;
  createdOn?:string;
  updatedOn?:string;
}