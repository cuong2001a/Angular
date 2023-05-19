import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoTicket } from '../admin/common/infoTicket';
@Injectable({
  providedIn: 'root'
})
export class InfoTicketService {

  constructor(private http: HttpClient) { }
  getList(): Observable<InfoTicket[]>{
    let url = `${environment.apiUrl}/infoTicket`;
    return this.http.get<InfoTicket[]>(url)
  }
  
  add(obj:InfoTicket): Observable<InfoTicket>{
    let url = `${environment.apiUrl}/infoTicket/create`;
    return this.http.post<InfoTicket>(url,obj)
  }

  delete(id:InfoTicket): Observable<InfoTicket>{
    return this.http.delete<InfoTicket>(`${environment.apiUrl}/infoTicket/`+id)
  }

  getDetail(id:InfoTicket): Observable<InfoTicket>{
    return this.http.get<InfoTicket>(`${environment.apiUrl}/infoTicket/`+id)
  }

  update(id:InfoTicket, data:any): Observable<InfoTicket>{
    return this.http.put<InfoTicket>(`${environment.apiUrl}/infoTicket/edit/${id}`, data)
  }

  searchInfo(info: InfoTicket) :Observable<InfoTicket>{
    return this.http.get<InfoTicket>(`${environment.apiUrl}/infoTicket/search?code=${info.code}&email=${info.email}`)
  }
}
