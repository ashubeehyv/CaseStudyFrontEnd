import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  doLogin(credentials: any) {
    return this.http.post(`${this.url}/login`, credentials);
  }

  doRegister(signupData:any){
    return this.http.post(`${this.url}/signup`,signupData);
  }

  loginUser(token: string) {
    localStorage.setItem("token", token)
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem("token")
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getProfile() {
    return this.http.get(`${this.url}/profile`);
  }

  // getUser(){
  //   return this.http.get(`${this.url}`);
  // }



}
