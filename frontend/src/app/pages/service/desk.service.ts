import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Desk } from '../admin/common/desk';
@Injectable({
  providedIn: 'root'
})
export class DeskService {

  constructor(private http: HttpClient) { }
  getList(): Observable<Desk[]> {
    let url = `${environment.apiUrl}/desk`;
    return this.http.get<Desk[]>(url)
  }

  read(id: any): Observable<any> {
    let data = `${environment.apiUrl}/desk/${id}`;
    console.log(data);
    return this.http.get<any>(data);
  }

  add(obj: Desk): Observable<Desk> {
    let url = `${environment.apiUrl}/desk/create`;
    return this.http.post<Desk>(url, obj)
  }
  delete(id: Desk): Observable<Desk> {
    return this.http.delete<Desk>(`${environment.apiUrl}/desk/delete/` + id)
  }

  update(id: any,data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/desk/edit/${id}`, data);
  }

  getDeskById(id:Desk): Observable<Desk[]>{
    return this.http.get<Desk[]>(`${environment.apiUrl}/desk?trainCarId=${id}`)
  }
  
  findbyId(id:Desk): Observable<Desk>{
    return this.http.get<Desk>(`${environment.apiUrl}/desk/${id}`)
  }
}
