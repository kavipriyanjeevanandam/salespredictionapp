import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersDataBaseService {
  constructor(private http: HttpClient) {}

  // Function to generate URL dynamically for Database query

  url(action: string, email: string, password: string): string {
    return `/api/db/${action}/${email}/${password}`;
  }

  // Function to SignUp

  insertUserData(email: string, password: string): Observable<any> {
    return this.http.get<any>(this.url('create', email, password));
  }

  // Function to Validate the input credentials

  isLoginValid(email: string, password: string): Observable<any> {
    return this.http.get<any>(this.url('read', email, password));
  }
}
