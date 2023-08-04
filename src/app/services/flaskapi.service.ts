import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FlaskapiService {
  constructor(private http: HttpClient) {}

  //  Function to post data to flaskApi

  postData(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data);
  }

  //  Function to get data from flaskApi

  getData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
