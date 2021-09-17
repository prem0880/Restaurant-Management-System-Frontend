import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private baseUrl = 'http://localhost:8083/api/meal';

  constructor(private http: HttpClient) { }

  createMeal(meal: Meal) {
    return this.http.post(`${this.baseUrl}`, meal, { responseType: 'text' });
  }


  getAllMeal(): Observable<any> {
    return this.http.get<Meal>(`${this.baseUrl}`);
  }

  deleteMeal(id: number) {
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete(`${this.baseUrl}/${id}`, { headers, responseType: 'text' });
  }

  updateMeal(id: number, meal: Meal) {
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put(`${this.baseUrl}/${id}`, meal, { headers, responseType: 'text' });
  }
}
export class Meal {
  id?: number;
  name?: string;
}