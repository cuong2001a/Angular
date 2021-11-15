import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Arrival } from '../admin/common/addressArrival';
@Injectable({
  providedIn: 'root'
})
export class ArrivalService {

  constructor(private http: HttpClient) { }
  getList(): Observable<Arrival[]> {

    let url = `${environment.apiUrl}/addressArrival`;
    return this.http.get<Arrival[]>(url)
  }

  read(id: any): Observable<any> {
    let data = `${environment.apiUrl}/addressArrival/detail/${id}`;
    return this.http.get<any>(data);
  }

  add(obj: Arrival): Observable<Arrival> {
    let url = `${environment.apiUrl}/addressArrival/create`;
    return this.http.post<Arrival>(url, obj)
  }

  delete(id: Arrival): Observable<Arrival> {
    return this.http.delete<Arrival>(`${environment.apiUrl}/addressArrival/` + id)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/addressArrival/${id}`, data);
  }

  searchByName(keyword: any): Observable<Arrival[]> {
    console.log(1)
    return this.http.get<Arrival[]>(`${environment.apiUrl}/addressArrival/searchByName?name_like=${keyword}`);
  }
}
