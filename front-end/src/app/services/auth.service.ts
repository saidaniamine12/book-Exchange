import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : any;
  authToken: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/jason');
    return this.http.post('http://localhost:3000/user/signup', user ,{headers: headers})
    
    .pipe(map(res => res));
    //.pipe(map((res: Response) => res.json()));

  }




  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/jason');
    return this.http.post('http://localhost:3000/user/login', user ,{headers: headers})
    
    .pipe(map(res => res));


  }
  storeUserData(userId, token){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user_id',JSON.stringify(userId))
    this.authToken = token;
    this.user = userId; 
  }








}



