import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from 'src/environments/environment';
import { Go } from '../admin/common/addressGo';

@Injectable({
  providedIn: 'root'
})
export class GoService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Go[]> {
    let url = `${environment.apiUrl}/addressGo`;
    return this.http.get<Go[]>(url)
  }

  read(id: any): Observable<any> {
    let data = `${environment.apiUrl}/addressGo/detail/${id}`;
    return this.http.get<any>(data);
  }

  add(obj: Go): Observable<Go> {
    return this.http.post<Go>(`${environment.apiUrl}/addressGo/create`, obj)
  }

  delete(id: any): Observable<Go> {
    return this.http.delete<Go>(`${environment.apiUrl}/addressGo/${id}`)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/addressGo/${id}`, data);
  }
  searchByName(keyword: any): Observable<Go[]> {
    // console.log(1)
    return this.http.get<Go[]>(`${environment.apiUrl}/addressGo/searchByName?name_like=${keyword}`);
  }
}
