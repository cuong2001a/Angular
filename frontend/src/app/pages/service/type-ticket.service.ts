import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeTicket } from '../admin/common/typeTicket';
@Injectable({
  providedIn: 'root'
})
export class TypeTicketService {

  constructor(private http: HttpClient) { }
  getList(): Observable<TypeTicket[]> {
    let url = `${environment.apiUrl}/typeTicket`;
    return this.http.get<TypeTicket[]>(url)
  }

  read(id: any): Observable<any> {
    let data = `${environment.apiUrl}/typeTicket/${id}`;
    console.log(data);
    return this.http.get<any>(data);
  }

  add(obj: TypeTicket): Observable<TypeTicket> {
    let url = `${environment.apiUrl}/typeTicket/create`;
    return this.http.post<TypeTicket>(url, obj)
  }

  delete(id: TypeTicket): Observable<TypeTicket> {
    return this.http.delete<TypeTicket>(`${environment.apiUrl}/typeTicket/${id}`)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/typeTicket/${id}`, data);
  }

  findOne(id:any) :Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/typeTicket/${id}`)
  }
}
