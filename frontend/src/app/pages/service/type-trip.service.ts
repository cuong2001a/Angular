import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeTrip } from '../admin/common/typeTrip';
@Injectable({
  providedIn: 'root'
})
export class TypeTripService {

  constructor(private http: HttpClient) { }

  getList(): Observable<TypeTrip[]> {
    let url = `${environment.apiUrl}/typeTrip`;
    return this.http.get<TypeTrip[]>(url)
  }

  read(id: any): Observable<any> {
    let data = `${environment.apiUrl}/typeTrip/${id}`;
    return this.http.get<any>(data);
  }

  addList(obj: TypeTrip): Observable<TypeTrip> {
    let url = `${environment.apiUrl}/typeTrip/create`;
    return this.http.post<TypeTrip>(url, obj)
  }

  delete(id: TypeTrip): Observable<TypeTrip> {
    return this.http.delete<TypeTrip>(`${environment.apiUrl}/typeTrip/${id}`)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/typeTrip/${id}`, data);
  }
}
