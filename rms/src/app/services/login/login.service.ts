import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseStatus } from '../response/HttpResponseStatus';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8083/login';

  constructor(private http:HttpClient) { }

  save(login : Login) {
    return this.http.post(this.baseUrl, login);
  }

  loginValidation(credential:Login):Observable<HttpResponseStatus>{
    const login={
      "email": credential.email,
      "password":credential.password
    }
    return this.http.post(`${this.baseUrl}/credential`, login);
  }

  getRoleById(id:number):Observable<HttpResponseStatus>{
    return this.http.get(`${this.baseUrl}/${id}`);
 
  }

}
export class Login{
  id?:number;
  email?:string;
  password?:string|any;
  role?:string;
  createdOn?:string;
  updatedOn?:string;
}