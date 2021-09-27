import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private baseUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) { }

  createMeal(meal: Meal) {
    return this.http.post(`${this.baseUrl}/addMeal`, meal, { responseType: 'text' });
  }


  getAllMeal(): Observable<any> {
    return this.http.get<Meal>(`${this.baseUrl}/getAllMeal`);
  }

  getMealById(id:number){
    return this.http.get(`${this.baseUrl}/getMeal/${id}`);
  }

  deleteMeal(id: number) {
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete(`${this.baseUrl}/deleteMeal/${id}`, { headers, responseType: 'text' });
  }

  updateMeal(id: number, meal: Meal) {
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put(`${this.baseUrl}/updateMeal/${id}`, meal, { headers, responseType: 'text' });
  }
}
export class Meal {
  id?: number;
  name?: string;
}